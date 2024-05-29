import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatJabatan from '../forms/FormRiwayatJabatan';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Jabatan</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatJabatan {...props} />
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
      onCreateNew={onCreateNew}
      title={'Daftar Riwayat Jabatan'}
      grid_url={'/riwayat-jabatan'}
      cols={[
        {
          label: 'JABATAN',
          field: 'nama_jabatan'
        },
        {
          label: 'UNIT KERJA',
          field: 'unit_text'
        },
        {
          label: 'TMT JABATAN',
          field: 'tmt_sk',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'NO SK',
          field: 'no_sk'
        },
        {
          label: 'TGL SK',
          field: 'tgl_sk',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'TMT SK',
          field: 'tmt_sk',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },

        {
          label: 'PEJABAT PENETAP',
          field: 'pejabat_penetap_jabatan'
        },
        {
          label: 'STATUS RIWAYAT JABATAN',
          field: 'status_riwayat',
          formatter: function (value, row, index) {
            if(value==1) return <Badge bg='primary'>Aktif</Badge>
            else return <Badge bg='danger'>Inaktif</Badge>
          }
        }
      ]}
    />
  );
};
export default (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
