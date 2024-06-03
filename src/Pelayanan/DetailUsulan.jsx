import React, { lazy, useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button, Form, Badge } from 'react-bootstrap';
import { ApiCall } from '../Api/api';
import Moment from 'react-moment';
import DetailPegawai from './forms/DetailPegawai';
import { useNavigate, useParams } from 'react-router-dom';

const DetailUsulan = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [employee, setEmployee] = useState();
  const [Component, setComponent] = useState();
  const onSave = () => {
    alert('Save...');
  };
  useEffect(() => {
    ApiCall.get('/usulan/' + params.uuid_usulan + '/detail')
      .then((res) => {
        setData(res?.data);
        const comp = lazy(() => import('./' + res?.data?.data?.obj_kategori?.panelclass));
        setComponent(comp);
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
                      <DetailPegawai employee={data?.data?.obj_employee} />
                    </Card.Body>
                  </Card>{' '}
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
                          <Form.Label>Action </Form.Label> {data?.data?.action == 1 && <Badge>Pembuatan Record Baru</Badge>}
                          {data?.data?.action == 2 && <Badge>Perubahan Record Baru</Badge>}
                          {data?.data?.action == 3 && <Badge>Penghapusan Record</Badge>}
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
                </Col>
                <Col lg={8}>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h5">Form Usulan</Card.Title>
                    </Card.Header>
                    <Card.Body>{Component && <Component activePanel="detail" showDetail={data?.data?.id} />}</Card.Body>
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
