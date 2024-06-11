import React, { lazy, useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button, Form, Badge } from 'react-bootstrap';
import { ApiCall } from '../Api/api';
import Moment from 'react-moment';
import DetailPegawai from './forms/DetailPegawai';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaCross, FaRemoveFormat } from 'react-icons/fa';
import { AppInformasi, AppInformasiError, AppKonfirmasi } from './components/App';

export default (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [alasan, setAlasan] = useState('');
  const [data, setData] = useState([]);
  const [employee, setEmployee] = useState();
  const [Component, setComponent] = useState();
  const onOK = () => {
    AppKonfirmasi({
      title: 'Perhatian',
      cancelButtonText: 'Batal ',
      html: 'Apakah anda yakin mau <b>MENERIMA</b> usulan ini ?',
      onConfirmed: () => {
        const formData = new FormData();
        formData.append('uuid', params.uuid_usulan);
        formData.append('alasan', alasan);
        formData.append('action', 'terima');
        ApiCall.post('/on-verify', formData)
          .then((res) => {
            AppInformasi({
              onConfirmed: () => {
                window.location.reload();
              },
              options: { text: 'Data berhasil di verifikasi' }
            });
          })
          .catch((err) => {
            if (err.response.status == 422) {
              AppInformasiError({ options: { text: err?.response?.data?.message } });
            }
          })
          .finally(() => {});
      }
    });
  };
  const onTolak = () => {
    AppKonfirmasi({
      title: 'Perhatian',
      html: 'Apakah anda yakin mau menolak usulan ini ?',
      onConfirmed: () => {
        const formData = new FormData();
        formData.append('uuid', params.uuid_usulan);
        formData.append('alasan', alasan);
        formData.append('action', 'tolak');
        ApiCall.post('/on-verify', formData)
          .then((res) => {
            AppInformasi({
              onConfirmed: () => {
                window.location.reload();
              },
              options: { text: 'Data berhasil di verifikasi' }
            });
          })
          .catch((err) => {
            if (err.response.status == 422) {
              AppInformasiError({ options: { text: err?.response?.data?.message } });
            }
          })
          .finally(() => {});
      }
    });
  };

  useEffect(() => {
    ApiCall.get('/usulan/' + params.uuid_usulan + '/detail')
      .then((res) => {
        setData(res?.data);
        const comp = lazy(() => import('./' + res?.data?.data?.obj_kategori?.panelclass));
        setComponent(comp);
      })
      .catch((err) => {})
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
                      <Card.Title as="h5">Form Usulan </Card.Title>
                    </Card.Header>
                    <Card.Body>
                      {Component && data?.data?.data?.action == 1 && (
                        <Component activePanel="detail" refData={data?.data?.data?.new_data} />
                      )}
                      {Component && data?.data?.data?.action == 2 && (
                        <Component activePanel="detail" refData={data?.data?.data?.new_data} />
                      )}
                      {Component && data?.data?.data?.action == 3 && (
                        <Component activePanel="detail" refData={data?.data?.data?.ref_data} />
                      )}
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
                            <th>Oleh</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.data?.obj_logs.map((v, i) => {
                            return (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                  <Moment date={v?.created_at} format="DD/MM/YYYY hh:mm:ss" />
                                </td>
                                <td>{v?.values?.keterangan}</td>
                                <td>
                                  {v?.obj_user?.name} - [{v?.obj_user?.id}]
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                  {data?.data?.status_id <=2 && (
                    <Card>
                      <Card.Header>
                        <Card.Title as="h5">Form Verifikasi</Card.Title>
                      </Card.Header>

                      <Card.Body>
                        <Form.Group>
                          <Form.Label>ALASAN </Form.Label>
                          <Form.Control
                            as="textarea"
                            value={alasan}
                            onChange={(e) => {
                              setAlasan(e.target.value);
                            }}
                          ></Form.Control>
                        </Form.Group>
                      </Card.Body>
                      <Card.Footer>
                        <Button variant="primary" onClick={onOK} style={{ float: 'right' }}>
                          <FaCheck />
                          Terima
                        </Button>
                        <Button variant="danger" onClick={onTolak} style={{ float: 'right' }}>
                          <FaRemoveFormat />
                          Tolak
                        </Button>
                      </Card.Footer>
                    </Card>
                  )}
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                onClick={() => {
                  navigate('/verifikasi-usulan');
                }}
              >
                <FaArrowLeft></FaArrowLeft> Ke Daftar Verifikasi
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
