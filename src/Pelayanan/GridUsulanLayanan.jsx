import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ApiCall } from '../Api/api';
import { useEffect } from 'react';

const GridUsulanLayanan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const onCreateNew = () => {
    navigate('/usulan-ku/buat-baru');
  };
  const onReload = () => {
    ApiCall.post('/usulan-saya')
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {})
      .finally(() => {});
  };
  useEffect(()=>{
    onReload()
  },[])
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Daftar Usulan </Card.Title>

              <Button size="sm" style={{ float: 'right' }} color="primary" onClick={onCreateNew}>
                Buat Baru
              </Button>
              <span className="d-block m-t-5">
                use props <code>className=&quot;bg-* text-*&quot;</code> with <code>tr</code> element
              </span>
            </Card.Header>

            <Card.Body>
              {data.length == 0 && (
                <>
                  <Alert color="info" style={{ textAlign: 'center' }}>
                    Tidak ada data
                  </Alert>
                </>
              )}
              {data.length > 0 && (
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Usulan</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((v, i) => {
                      return (
                        <tr key={i} className="table-dark text-white">
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default GridUsulanLayanan;
