import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatSumpah from '../forms/FormRiwayatSumpah';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Sumpah</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatSumpah {...props} />
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
      title={'Daftar Riwayat Sumpah'}
      grid_url={'/riwayat-sumpah'}
      cols={[
        {
          label: 'NO SUMPAH',
          field: 'no_sumpah'
        },
        {
          label: 'TGL SUMPAH',
          field: 'tgl_sumpah',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        
        {
          label: 'PEJABAT KETERANGAN',
          field: 'keterangan'
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
