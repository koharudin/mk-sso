import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';
import FormRiwayatAngkaKredit from '../forms/FormRiwayatAngkaKredit';
import FormRiwayatDiklatFungsional from '../forms/FormRiwayatDiklatFungsional';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Diklat Fungsional</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatDiklatFungsional {...props} />
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
      title={'Daftar Riwayat Diklat Fungsional'}
      grid_url={'/riwayat-diklat-fungsional'}
      cols={[
        {
          label: 'NAMA DIKLAT',
          field: 'nama_diklat'
        },
        {
          label: 'PENYELENGGARA',
          field: 'penyelenggara'
        },
        {
          label: 'TAHUN',
          field: 'tahun'
        },
        {
          label: 'TGL MULAI',
          field: 'tgl_mulai',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'TGL SELESAI',
          field: 'tgl_selesai',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'JUMLAH JAM',
          field: 'jumlah_jam'
        },
      ]}
    />
  );
};
const PanelRiwayatDiklatFungsional = (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
export default PanelRiwayatDiklatFungsional;
