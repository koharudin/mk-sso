import { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';
import FormUsulan from '../forms/FormRiwayatAngkaKredit';
import PanelKonfirmasiUsulan from './PanelKonfirmasiUsulan';
import { FaSave } from 'react-icons/fa';

const cols = [
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
];

const FormInput = (props) => {
  const [editedData, setEditedData] = useState();

  const onListenFields = (fields) => {
    setEditedData({ ...fields });
  };
  const onSubmit = () => {
    props.setRefData(props?.refData);
    props.setRecordData(editedData);
    props.setActiveForm('konfirmasiUsulan');
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">{props?.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        {props?.action == 1 && (
          <>
            <FormUsulan {...props} changeListener={onListenFields} />
          </>
        )}
        {props?.action == 2 && (
          <>
            <Row></Row>
            <Row>
              <Col lg="6">
                <FormUsulan disabledAll {...props} />
              </Col>
              <Col lg="6">
                <FormUsulan {...props} changeListener={onListenFields} />
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
  const onDelete = (id) => {
    props.setAction(3);
    props.setActiveForm('konfirmasiUsulan');
  };
  return (
    <GridUsulanRiwayat
      {...props}
      onDelete={onDelete}
      onCreateNew={onCreateNew}
      title={props?.title}
      grid_url={props?.grid_url}
      cols={cols}
    />
  );
};
export default (props) => {
  const initActiveForm = 'grid';
  const [activeForm, setActiveForm] = useState(initActiveForm);
  const [refData, setRefData] = useState();
  const [recordData, setRecordData] = useState();
  const [action, setAction] = useState();
  const [recordId, setRecordId] = useState();
  const recordIdName = 'id';
  const title = 'Riwayat Angka Kredit';
  const grid_url='/riwayat-angka-kredit'
  return (
    <>
      {props?.activePanel == 'init' && (
        <>
          {activeForm == 'grid' && (
            <DaftarRiwayat
              {...props}
              title={title}
              grid_url = {grid_url}
              action={action}
              setRecordId={setRecordId}
              recordIdName={recordIdName}
              setAction={setAction}
              refData={refData}
              recordData={recordData}
              setRefData={setRefData}
              setRecordData={setRecordData}
              setActiveForm={setActiveForm}
              propsWizard={props?.propsWizard}
            />
          )}
          {activeForm == 'form' && (
            <>
              <FormInput
                {...props}
                title={title}
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
              setActiveForm={setActiveForm}
              action={action}
              recordData={recordData}
              refData={refData}
              recordId={recordId}
              propsWizard={props?.propsWizard}
            >
              <FormUsulan disabledAll {...props} refData={refData} recordData={recordData} />
            </PanelKonfirmasiUsulan>
          )}
        </>
      )}

      {props?.activePanel == 'detail' && <FormUsulan disabledAll {...props} propsWizard={props?.propsWizard} />}
    </>
  );
};
