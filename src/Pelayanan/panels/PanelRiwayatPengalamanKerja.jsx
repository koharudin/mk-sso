import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatPengalamanKerja from '../forms/FormRiwayatPengalamanKerja';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Pengalaman Kerja</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatPengalamanKerja {...props} />
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
      title={'Daftar Riwayat Pengalaman Kerja'}
      grid_url={'/riwayat-pengalaman-kerja'}
      cols={[
        {
          label: 'INSTANSI',
          field: 'instansi'
        },
        {
          label: 'JABATAN',
          field: 'jabatan'
        },
        {
          label: 'MASA KERJA TAHUN',
          field: 'masa_kerja_tahun'
        },
        {
          label: 'MASA KERJA BULAN',
          field: 'masa_kerja_bulan'
        },
        {
          label: 'TGL KERJA',
          field: 'tgl_kerja',
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
