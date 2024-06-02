import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Fields } from 'redux-form';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectStatusKeluarga';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';
import FormRiwayatAnak from '../forms/FormRiwayatAnak';
import { Axios } from 'axios';
import { ApiCall } from '../../Api/api';
import RemoteGrid from '../components/RemoteGrid';
import Moment from 'react-moment';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import FormRiwayatDP3 from '../forms/FormRiwayatDP3';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat DP3</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatDP3 {...props} />
      </Card.Body>
    </Card>
  );
};
const DaftarRiwayat = (props) => {
  const onCreateNew = () => {
    props.setActivePanel('form');
  };

  return (
    <GridUsulanRiwayat propsWizard={props.propsWizard} 
      onCreateNew={onCreateNew}
      grid_url={'/riwayat-dp3'}
      cols={[
        {
          label: 'TAHUN',
          field: 'tahun'
        },
        {
          label: 'KESETIAAN',
          field: 'kesetiaan'
        },
        {
          label: 'PRESTASI',
          field: 'prestasi'
        },
        {
          label: 'TANGGUNG JAWAB',
          field: 'tanggung_jawab'
        },
        {
          label: 'KETAATAN',
          field: 'ketaatan'
        },
        {
          label: 'KEJUJURAN',
          field: 'kejujuran'
        },
        {
          label: 'KERJASAMA',
          field: 'kerjasama'
        },
        {
          label: 'PRAKARSA',
          field: 'prakarsa'
        },
        {
          label: 'KEPEMIMPINAN',
          field: 'kepemimpinan'
        }
      ]}
    />
  );
};
const PanelRiwayatDP3 = (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
export default PanelRiwayatDP3;
