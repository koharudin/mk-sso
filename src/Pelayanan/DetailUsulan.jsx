import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import FormUsulanRiwayatPendidikan from './FormUsulanRiwayatPendidikan';
import { ApiCall } from '../Api/api';
import Moment from 'react-moment';
import DetailPegawai from './forms/DetailPegawai';

const DetailUsulan = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [employee, setEmployee] = useState();
  const onSave = () => {
    alert('Save...');
  };
  useEffect(() => {
    ApiCall.get('/usulan/' + params.uuid_usulan + '/detail')
      .then((res) => {
        setData(res?.data);
      })
      .catch((resError) => {})
      .finally(() => {});
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Detail Usulan </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={4}>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Pegawai yang mengusulkan</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <DetailPegawai employee={data?.data?.obj_employee}/>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={8}>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Data Usulan</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Form>
                        <Form.Group>
                          <Form.Label>UUID Usulan </Form.Label>
                          <Form.Control readOnly type="text" value={data?.data?.uuid}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Dibuat pada </Form.Label> <Moment date={data?.data?.created_at} format="DD/MMM/YYYY hh:mm:ss" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Status </Form.Label>
                          <Form.Control readOnly type="text" value={data?.data?.obj_status?.name}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Kategori </Form.Label>
                          <Form.Control readOnly type="text" value={data?.data?.obj_kategori?.name}></Form.Control>
                        </Form.Group>
                      </Form>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Log Usulan</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Table striped responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Waktu</th>
                            <th>Keterangan</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DetailUsulan;
