import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatPengalamanKerja from '../forms/FormRiwayatPengalamanKerja';
import FormRiwayatOrganisasi from '../forms/FormRiwayatOrganisasi';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Organisasi</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatOrganisasi {...props} />
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
      title={'Daftar Riwayat Organisasi'}
      grid_url={'/riwayat-organisasi'}
      cols={[
        {
          label: 'NAMA',
          field: 'nama'
        },
        {
          label: 'JABATAN',
          field: 'jabatan'
        },
        {
          label: 'AWAL',
          field: 'awal',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'AKHIR',
          field: 'akhir',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'PIMPINAN',
          field: 'pimpinan'
        },
        {
          label: 'TEMPAT',
          field: 'tempat'
        }
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
