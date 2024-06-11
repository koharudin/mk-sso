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

export default (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [randomReload, setRandomReload] = useState();
  const onVerifikasiUsulan = (action) => {
    
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Verifikasi Usulan </Card.Title>
            </Card.Header>

            <Card.Body>
              <RemoteGrid
                triggerReload={randomReload}
                title={'Daftar Riwayat Usulan '}
                grid_url={'/verifikasi-usulan'}
                cols={[
                  {
                    label: 'DIAJUKAN OLEH',
                    field: 'obj_employee',
                    formatter: function (value) {
                      return value?.first_name + ' / ' + value?.nip_baru;
                    }
                  },
                  {
                    label: 'KATEGORI LAYANAN',
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
                              navigate(`/verifikasi-usulan/` + row.uuid + `/detail`);
                            }}
                          >
                            {' '}
                            <BsZoomIn /> Verifikasi
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
