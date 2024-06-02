import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatMertua from '../forms/FormRiwayatMertua';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Mertua</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatMertua {...props} />
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
      title={'Daftar Riwayat Mertua'}
      grid_url={'/riwayat-mertua'}
      cols={[
        {
          label: 'NAMA',
          field: 'name'
        },
        {
          label: 'NAMA STATUS',
          field: 'status',
          formatter: function (value, row, index) {
            if(value==3){
              return "Mertua Ayah"
            }
            else if(value==4){
              return "Mertua  Ibu"
            }
            return "-"
          }
        },
        {
          label: 'TGL LAHIR',
          field: 'birth_date',
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
      {activePanel == 'grid' && <DaftarRiwayat propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
