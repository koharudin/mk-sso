import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatPendidikan from '../forms/FormRiwayatPendidikan';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Pendidikan</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatPendidikan{...props} />
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
      title={'Daftar Riwayat Pendidikan'}
      grid_url={'/riwayat-pendidikan'}
      cols={[
        {
          label: 'JURUSAN',
          field: 'jurusan'
        },
        {
          label: 'NAMA SEKOLAH',
          field: 'nama_sekolah'
        },
        {
          label: 'TEMPAT SEKOLAH',
          field: 'tempat_sekolah'
        },
        {
          label: 'TAHUN',
          field: 'tahun'
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
