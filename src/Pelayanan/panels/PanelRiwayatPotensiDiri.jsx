import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatPotensiDiri from '../forms/FormRiwayatPotensiDiri';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Potensi Diri</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatPotensiDiri {...props} />
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
      title={'Daftar Riwayat Pontensi Diri'}
      grid_url={'/riwayat-potensidiri'}
      cols={[
        {
          label: 'TAHUN',
          field: 'tahun'
        },
        {
          label: 'TANGGUNG JAWAB',
          field: 'tanggung_jawab'
        },
        {
          label: 'MOTIVASI',
          field: 'motivasi'
        },
        {
          label: 'MINAT',
          field: 'minat'
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
