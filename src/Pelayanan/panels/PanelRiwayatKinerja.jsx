import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatKinerja from '../forms/FormRiwayatKinerja';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Kinerja</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatKinerja {...props} />
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
      title={'Daftar Riwayat Kinerja'}
      grid_url={'/riwayat-kinerja'}
      cols={[
        {
          label: 'TAHUN',
          field: 'tahun'
        },
        {
          label: 'NILAI',
          field: 'nilai'
        },
        {
          label: 'TANGGAL PENILAIAN',
          field: 'tgl_penilaian',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'SATUAN KERJA',
          field: 'satuan_kerja'
        },
        {
          label: 'JABATAN',
          field: 'jabatan'
        },
        {
          label: 'NILAI SKP',
          field: 'nilai_skp'
        },
        {
          label: 'NILAI PERILAKU',
          field: 'nilai_perilaku'
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
