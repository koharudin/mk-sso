import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';

import FormRiwayatKursus from '../forms/FormRiwayatKursus';
import FormRiwayatBahasa from '../forms/FormRiwayatBahasa';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Bahasa</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatBahasa {...props} />
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
      title={'Daftar Riwayat Penguasaan Bahasa'}
      grid_url={'/riwayat-penguasaanbahasa'}
      cols={[
        {
          label: 'JENIS BAHASA',
          field: 'obj_jenis_bahasa',
          formatter: function (val) {
            if (val) return val?.name;
          }
        },
        {
          label: 'NAMA BAHASA',
          field: 'nama_bahasa'
        },
        {
          label: 'KEMAMPUAN BICARA',
          field: 'obj_kemampuan_bicara',
          formatter: function (val) {
            if (val) return val?.name;
          }
        },
        {
          label: 'JENIS SERTIFIKASI',
          field: 'jenis_sertifikasi'
        },
        {
          label: 'LEMBAGA SERTIFIKASI',
          field: 'lembaga_sertifikasi'
        },
        {
          label: 'SKOR',
          field: 'skor'
        },
        {
          label: 'tTGL KADALUARSA',
          field: 'tgl_expired',
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
      {activePanel == 'grid' && <DaftarRiwayat setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
