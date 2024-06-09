import { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';
import FormUsulan from '../forms/FormRiwayatDiklatTeknis';
import PanelKonfirmasiUsulan from './PanelKonfirmasiUsulan';
import { FaSave } from 'react-icons/fa';

const cols = [
  {
    label: 'NAMA DIKLAT',
    field: 'nama_diklat'
  },
  {
    label: 'PENYELENGGARA',
    field: 'penyelenggara'
  },
  {
    label: 'TAHUN',
    field: 'tahun'
  },
  {
    label: 'TGL MULAI',
    field: 'tgl_mulai',
    formatter: function (value, row, index) {
      return <Moment date={value} format="DD/MMM/YYYY" />;
    }
  },
  {
    label: 'TGL SELESAI',
    field: 'tgl_selesai',
    formatter: function (value, row, index) {
      return <Moment date={value} format="DD/MMM/YYYY" />;
    }
  },
  {
    label: 'JUMLAH JAM',
    field: 'jumlah_jam'
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
  const title = 'Riwayat Diklat Teknis';
  const grid_url = '/riwayat-diklat-teknis';
  return (
    <>
      {props?.activePanel == 'init' && (
        <>
          {activeForm == 'grid' && (
            <DaftarRiwayat
              {...props}
              title={title}
              grid_url={grid_url}
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
