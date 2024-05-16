import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';
import FormRiwayatAngkaKredit from '../forms/FormRiwayatAngkaKredit';
import FormRiwayatGaji from '../forms/FormRiwayatGaji';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Gaji</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatGaji {...props} />
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
      title={'Daftar Riwayat Gaji'}
      grid_url={'/riwayat-gaji'}
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
const PanelRiwayatGaji = (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
export default PanelRiwayatGaji;
