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

const GridUsulanLayanan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const onCreateNew = () => {
    navigate('/usulan-ku/buat-baru');
  };
  const onReload = () => {
    ApiCall.post('/usulan-saya')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {})
      .finally(() => {});
  };
  useEffect(() => {
    onReload();
  }, []);
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
            </Card.Header>

            <Card.Body>
              <RemoteGrid
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
                              navigate(`/daftar-usulan/`+row.uuid+`/detail` );
                            }}
                          >
                            {' '}
                            <BsZoomIn /> DETAIL
                          </Button>
                          <Button
                            variant="danger"
                            color="danger"
                            onClick={() => {
                              alert('hapus ' + row.uuid);
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
