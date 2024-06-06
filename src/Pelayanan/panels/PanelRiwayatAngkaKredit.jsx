import { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';
import FormRiwayatAngkaKredit from '../forms/FormRiwayatAngkaKredit';
import PanelKonfirmasiUsulan from './PanelKonfirmasiUsulan';
import { FaSave } from 'react-icons/fa';

const FormInput = (props) => {
  const [editedData, setEditedData] = useState();

  const onListenFields = (fields) => {
    setEditedData({ ...fields });
  };
  const onSubmit = () => {
    if (props?.fwdToConfirmationRequestForm) {
      props.fwdToConfirmationRequestForm(props.layanan_id, props.action, props?.refData, editedData);
    } else {
      AppInformasiError({ options: { text: 'function fwdToConfirmationRequestForm tidak ditemukan' } });
    }
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Angka Kredit</Card.Title>
      </Card.Header>
      <Card.Body>
        {props?.action == 1 && (
          <>
            <FormRiwayatAngkaKredit {...props} changeListener={onListenFields} />
          </>
        )}
        {props?.action == 2 && (
          <>
            <Row></Row>
            <Row>
              <Col lg="6">
                <FormRiwayatAngkaKredit disabledAll {...props}  />
              </Col>
              <Col lg="6">
                <FormRiwayatAngkaKredit {...props}  changeListener={onListenFields}/>
              </Col>
            </Row>
          </>
        )}
      </Card.Body>
      <Card.Footer>
        <Button style={{ float: 'right' }} size="sm" variant="primary" onClick={onSubmit}>
          <FaSave /> Simpan
        </Button>
      </Card.Footer>
    </Card>
  );
};
const DaftarRiwayat = (props) => {
  const onCreateNew = () => {
    props.setAction(1);
    props.setActiveForm('form');
  };

  return (
    <GridUsulanRiwayat
      {...props}
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
const PanelRiwayatAngkaKredit = (props) => {
  const initActiveForm = 'grid';
  const [activeForm, setActiveForm] = useState(initActiveForm);
  const [refData, setRefData] = useState();
  const [recordData, setRecordData] = useState();
  const [action, setAction] = useState();

  return (
    <>
      {props?.activePanel == 'init' && (
        <>
          {activeForm == 'grid' && (
            <DaftarRiwayat
              {...props}
              action={action}
              setAction={setAction}
              refData={refData}
              recordData={recordData}
              setRefData={setRefData}
              setRecordData={setRecordData}
              setActiveForm={setActiveForm}
            />
          )}
          {activeForm == 'form' && (
            <>
              {' '}
              test {JSON.stringify(recordData)}
              {}
              <FormInput
                {...props}
                action={action}
                refData={refData}
                recordData={recordData}
                setRefData={setRefData}
                setRecordData={setRecordData}
                setActiveForm={setActiveForm}
                propsWizard={props?.propsWizard}
              />
            </>
          )}
          {activeForm == 'konfirmasiUsulan' && (
            <PanelKonfirmasiUsulan
              {...props}
              refData={refData}
              recordData={recordData}
              setRefData={setRefData}
              setRecordData={setRecordData}
              setActiveForm={setActiveForm}
              propsWizard={props?.propsWizard}
            />
          )}
        </>
      )}

      {props?.activePanel == 'detail' && <FormRiwayatAngkaKredit disabledAll {...props} propsWizard={props?.propsWizard} />}
    </>
  );
};
export default PanelRiwayatAngkaKredit;
