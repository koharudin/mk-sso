import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatMutasi from '../forms/FormRiwayatMutasi';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Mutasi</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatMutasi {...props} />
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
      title={'Daftar Riwayat Mutasi'}
      grid_url={'/riwayat-mutasi'}
      cols={[
        {
          label: 'SATKER LAMA',
          field: 'satker_lama'
        },
        {
          label: 'SATKER BARU',
          field: 'satker_baru'
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
          label: 'LAMA BEKERJA',
          field: 'lama_kerja_diunit'
        },
        {
          label: 'PEJABAT PENETAP',
          field: 'pejabat_penetap_jabatan'
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
