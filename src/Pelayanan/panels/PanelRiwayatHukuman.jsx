import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatHukuman from '../forms/FormRiwayatHukuman';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Hukuman</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatHukuman {...props} />
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
      title={'Daftar Riwayat Hukuman'}
      grid_url={'/riwayat-hukuman'}
      cols={[
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
          label: 'MASA KERJA TAHUN',
          field: 'masakerja_tahun'
        },
        {
          label: 'MASA KERJA BULAN',
          field: 'masakerja_bulan'
        },
        {
          label: 'JENIS KENAIKAN',
          field: 'jenis_kenaikan',
          formatter : function (value,row,index){
            return row?.obj_jenis_kenaikan_gaji?.name
          }
        },
        {
          label: 'GAJI POKOK',
          field: 'gaji_pokok',
          formatter: function (value, row, index) {
            return (
              <>
                {numericFormatter(value, {
                  decimalSeparator: ',',
                  prefix:"Rp.",
                  suffix:",-",
                  thousandSeparator: '.',
                  decimalScale: 2
                })}
              </>
            );
          }
        },
        
      ]}
    />
  );
};
const PanelRiwayatHukuman = (props) => {
  const [activePanel, setActivePanel] = useState('form');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput propsWizard={props?.propsWizard} setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
export default PanelRiwayatHukuman;
