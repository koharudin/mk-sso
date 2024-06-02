import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';
import FormRiwayatDiklatStruktural from '../forms/FormRiwayatDiklatStruktural';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Diklat Struktural</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatDiklatStruktural {...props} />
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
      title={'Daftar Riwayat Diklat Struktural'}
      grid_url={'/riwayat-diklat-struktural'}
      cols={[
        {
          label: 'DIKLAT',
          field: 'diklat'
        },
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
const PanelRiwayatDiklatStruktural = (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
export default PanelRiwayatDiklatStruktural;
