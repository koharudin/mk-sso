import { useEffect, useState } from 'react';
import { Badge, Button, Card, Form, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';
import FormRiwayatAngkaKredit from '../forms/FormRiwayatAngkaKredit';
import PanelKonfirmasiUsulan from './PanelKonfirmasiUsulan';

const FormInput = (props) => {
  const onBatal = () => {
    props.setInnerForm('grid');
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Angka Kredit</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatAngkaKredit {...props} />
      </Card.Body>
    </Card>
  );
};
const DaftarRiwayat = (props) => {
  const onCreateNew = () => {
    props.setActiveForm('form');
  };

  return (
    <GridUsulanRiwayat
      {...props}
      propsWizard={props.propsWizard}
      onCreateNew={onCreateNew}
      title={'Daftar Riwayat Angka Kredit'}
      grid_url={'/riwayat-angka-kredit'}
      cols={[
        {
          label: 'NO SK',
          field: 'no_sk'
        },
        {
          label: 'TGL SK',
          field: 'tgl_sk'
        },
        {
          label: 'TGL AWAL PENILAIAN',
          field: 'dt_awal_penilaian',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'TGL AKHIR PENILAIAN',
          field: 'dt_akhir_penilaian',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'JABATAN',
          field: 'jabatan'
        },
        {
          label: 'UNIT KERJA',
          field: 'unit_kerja'
        },
        {
          label: 'PANGKAT',
          field: 'obj_pangkat',
          formatter: function (value, row, index) {
            return (
              <>
                {' '}
                {value.name} / {row['pangkat_id']}{' '}
              </>
            );
          }
        },
        {
          label: 'AK LAMA',
          field: 'ak_lama',
          formatter: function (value, row, index) {
            return (
              <>
                {numericFormatter(value, {
                  decimalSeparator: ',',
                  thousandSeparator: '.',
                  decimalScale: 2
                })}
              </>
            );
          }
        },
        {
          label: 'AK BARU',
          field: 'ak_baru',
          formatter: function (value, row, index) {
            return (
              <>
                {numericFormatter(value, {
                  decimalSeparator: ',',
                  thousandSeparator: '.',
                  decimalScale: 2
                })}
              </>
            );
          }
        },
        {
          label: 'TMT PAK',
          field: 'tmt_pak',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        }
      ]}
    />
  );
};
const onPanelKonfirmasiUsulan = (props) => {};
const PanelRiwayatAngkaKredit = (props) => {
  return (
    <>
      {props?.activePanel == 'init' && (
        <>
          {!props?.activeForm && <DaftarRiwayat {...props} propsWizard={props?.propsWizard} />}
          {props?.activeForm == 'grid' && <DaftarRiwayat {...props} propsWizard={props?.propsWizard} />}
          {props?.activeForm == 'form' && <FormInput {...props} propsWizard={props?.propsWizard} />}
          {props?.activeForm == 'konfirmasiUsulan' && <PanelKonfirmasiUsulan {...props} propsWizard={props?.propsWizard} />}
        </>
      )}

      {props?.activePanel == 'detail' && <FormRiwayatAngkaKredit disabledAll {...props} propsWizard={props?.propsWizard} />}
    </>
  );
};
export default PanelRiwayatAngkaKredit;
