import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatPendidikan from '../forms/FormRiwayatPendidikan';
import FormRiwayatOrangTua from '../forms/FormRiwayatOrangTua';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Orang Tua</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatOrangTua {...props} />
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
      title={'Daftar Riwayat Orang Tua'}
      grid_url={'/riwayat-orangtua'}
      cols={[
        {
          label: 'NAMA',
          field: 'name'
        },
        {
          label: 'NAMA STATUS',
          field: 'status',
          formatter: function (value, row, index) {
            if(value==1){
              return "Ayah"
            }
            else if(value==2){
              return "Ibu"
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
