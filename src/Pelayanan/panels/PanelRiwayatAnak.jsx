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

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Anak</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatAnak {...props} />
      </Card.Body>
    </Card>
  );
};
const DaftarRiwayat = (props) => {
  const onCreateNew = () => {
    props.setActivePanel('form');
  };

  return (
    <GridUsulanRiwayat
      propsWizard={props.propsWizard}
      onCreateNew={onCreateNew}
      grid_url={'/riwayat-anak'}
      cols={[
        {
          label: 'NAMA',
          field: 'name'
        },
        {
          label: 'TEMPAT LAHIR',
          field: 'birth_place'
        },
        {
          label: 'TANGGAL LAHIR',
          field: 'birth_date',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'JENIS KELAMIN',
          field: 'jenis_kelamin',
          formatter: function (value, row, index) {
            if (value == 'L') {
              return <Badge bg="primary">Laki-Laki</Badge>;
            } else if (value == 'P') {
              return <Badge bg="info">Perempuan</Badge>;
            } else return <Badge bg="danger">-</Badge>;
          }
        },
        {
          label: 'STATUS KELUARGA',
          field: 'status_keluarga',
          formatter: function (value, row, index) {
            if (value == 'K') {
              return <Badge bg="primary">KANDUNG</Badge>;
            } else return <Badge bg="danger">-</Badge>;
          }
        },
        {
          label: 'STATUS TUNJANGAN',
          field: 'status_tunjangan',
          formatter: function (value, row, index) {
            if (value == 1) {
              return <Badge bg="primary">DAPAT</Badge>;
            } else return <Badge bg="danger">TIDAK </Badge>;
          }
        },

        {
          label: 'BLN DIBAYAR',
          field: 'bln_dibayar',
          formatter: function (value, row, index) {
            return <Moment date={value} format="MMM" />;
          }
        },

        {
          label: 'BLN AKHIR DIBAYAR',
          field: 'bln_akhir_dibayar',
          formatter: function (value, row, index) {
            return <Moment date={value} format="MMM" />;
          }
        }
      ]}
    />
  );
};
const PanelRiwayatAnak = (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
export default PanelRiwayatAnak;
