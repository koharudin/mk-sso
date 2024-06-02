import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button, ButtonGroup, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ApiCall } from '../Api/api';
import { useEffect } from 'react';
import RemoteGrid from './components/RemoteGrid';
import Moment from 'react-moment';
import { BsZoomIn } from 'react-icons/bs';
import { FaEdit, FaPlus, FaRemoveFormat } from 'react-icons/fa';
import { AppInformasi, AppInformasiError, AppKonfirmasi } from './components/App';
import { MdAddToPhotos } from 'react-icons/md';

const GridUsulanLayanan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [randomReload, setRandomReload] = useState();
  const onCreateNew = () => {
    navigate('/usulan-ku/buat-baru');
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Daftar Usulan </Card.Title>

              <Button size="sm" style={{ float: 'right' }} color="primary" onClick={onCreateNew}>
                <MdAddToPhotos /> Buat Baru
              </Button>
            </Card.Header>

            <Card.Body>
              <RemoteGrid
                triggerReload={randomReload}
                title={'Daftar Riwayat Usulan Saya'}
                grid_url={'/usulan-saya'}
                cols={[
                  {
                    label: 'Kategori Layanan',
                    field: 'obj_kategori',
                    formatter: function (value) {
                      return value?.name;
                    }
                  },
                  {
                    label: 'STATUS',
                    field: 'obj_status',
                    formatter: function (value) {
                      return <Badge variant={'info'}>{value?.name}</Badge>;
                    }
                  },
                  {
                    label: 'AKSI',
                    field: 'action',
                    formatter: function (value) {
                      if (value == 1) return 'Usulan Baru';
                      else if (value == 2) return 'Perubahan';
                      else if (value == 3) return 'Penghapusan';
                    }
                  },
                  {
                    label: 'DIBUAT PADA',
                    field: 'created_at',
                    formatter: function (value, row, index) {
                      return <Moment date={value} format="DD/MMM/YYYY hh:mm:ss" />;
                    }
                  },
                  {
                    label: '#',
                    field: 'x',
                    formatter: function (value, row, index) {
                      return (
                        <ButtonGroup size="sm">
                          <Button
                            variant="primary"
                            color="primary"
                            onClick={() => {
                              navigate(`/daftar-usulan/` + row.uuid + `/detail`);
                            }}
                          >
                            {' '}
                            <BsZoomIn /> DETAIL
                          </Button>
                          <Button
                            variant="danger"
                            color="danger"
                            onClick={() => {
                              AppKonfirmasi({
                                title: 'Perhatian',
                                html: 'Apakah Usulan ini akan di hapus ?',
                                onConfirmed: function () {
                                  ApiCall.post('/usulan/' + row.uuid + '/hapus')
                                    .then((res) => {
                                      AppInformasi({
                                        options: { text: 'Data Usulan ' + row.uuid + ' berhasil dihapus' },
                                        onConfirmed: () => {
                                          setRandomReload(Math.random());
                                        }
                                      });
                                    })
                                    .catch((err) => {
                                      if (err.response.status === 404) {
                                        AppInformasiError({ options: { text: 'Terjadi kesalahan pada sistem. ' + err.response.status } });
                                      } else AppInformasiError('Terjadi kesalahan pada sistem. ' + err.response.status);
                                    })
                                    .finally(() => {});
                                }
                              });
                            }}
                          >
                            <FaRemoveFormat /> HAPUS
                          </Button>
                        </ButtonGroup>
                      );
                    }
                  }
                ]}
              ></RemoteGrid>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default GridUsulanLayanan;
