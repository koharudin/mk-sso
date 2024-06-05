import { Alert, Button, Card } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import PanelRiwayatJabatan from '../panels/PanelRiwayatJabatan';
import { lazy, useEffect } from 'react';
import { useState } from 'react';
import { ApiCall } from '../../Api/api';
import NotFoundModule from '../components/NotFoundModule';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import SelectUnitKerja from '../components/SelectUnitKerja';
import { useNavigate } from 'react-router-dom';

export default (props) => {
  const [uuid, setUuid] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (props?.data?.uuid) {
      setUuid(props?.data?.uuid);
    }
  }, [props?.data?.uuid]);

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}> Notifikasi Layanan</Card.Title>
        </Card.Header>
        <Card.Body>
          <Alert variant="warning">
            Usulan Anda berhasil di buat. Klik{' '}
            <Button size='sm'
              variant="primary"
              onClick={() => {
                navigate('/daftar-usulan/' + uuid + '/detail');
              }}
            >
              <FaSearch></FaSearch> Detail
            </Button> untuk melihat detail usulan Anda.
          </Alert>
        </Card.Body>
        <Card.Footer>
          <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.previousStep}>
            <FaArrowLeft /> Pilih Kategori Layanan
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
