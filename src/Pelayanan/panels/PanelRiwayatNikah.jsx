import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatNikah from '../forms/FormRiwayatNikah';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Nikah</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatNikah {...props} />
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
      title={'Daftar Riwayat Nikah'}
      grid_url={'/riwayat-nikah'}
      cols={[
        {
          label: 'NAMA SUAMI/ISTRI',
          field: 'name'
        },
        {
          label: 'STATUS PERNIKAHAN',
          field: 'obj_status_menikah',
          formatter: function (value, row, index) {
            return value?.name
          }
        },
        {
          label: 'SUAMI/ISTRI KE',
          field: 'urutan_pasangan'
        },
        {
          label: 'SEBAGAI AHLI WARIS',
          field: 'status_tunjangan',
          formatter: function (value, row, index) {
            if(value==1){
              return  <span class='label label-info'>Ya</span>
            }
            
            return "-"
          }
        },
        {
          label: 'TGL NIKAH',
          field: 'tgl_kawin',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'TGL SK CERAI',
          field: 'tgl_sk_cerai',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'JENIS PEKERJAAN',
          field: 'obj_jenis_pekerjaan',
          formatter: function (value, row, index) {
            return value?.name
          }
        },
        {
          label: 'PEKERJAAN',
          field: 'pekerjaan',
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
