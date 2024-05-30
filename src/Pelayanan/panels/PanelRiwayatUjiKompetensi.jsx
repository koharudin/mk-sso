import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatUjiKompetensi from '../forms/FormRiwayatUjiKompetensi';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Uji Kompetensi</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatUjiKompetensi {...props} />
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
      title={'Daftar Riwayat Uji Kompetensi'}
      grid_url={'/riwayat-ujikompetensi'}
      cols={[
        {
          label: 'JABATAN',
          field: 'jabatan'
        },
        {
          label: 'SATUAN KERJA',
          field: 'satker'
        },
        {
          label: 'KETERANGAN',
          field: 'keterangan'
        },
        {
          label: 'TANGGAL',
          field: 'tanggal',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
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
