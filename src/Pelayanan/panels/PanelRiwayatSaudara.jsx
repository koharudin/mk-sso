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
import FormRiwayatSaudara from '../forms/FormRiwayatSaudara';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Saudara</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatSaudara {...props} />
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
      title={'Daftar Riwayat Saudara'}
      grid_url={'/riwayat-saudara'}
      cols={[
       
        {
          label: 'NAMA',
          field: 'name'
        },
        
        {
          label: 'TANGGAL LAHIR',
          field: 'birth_date',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'TELEPON',
          field: 'telepon'
        },
        {
          label: 'ALAMAT',
          field: 'alamat'
        },
      ]}
    />
  );
};
export default (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
