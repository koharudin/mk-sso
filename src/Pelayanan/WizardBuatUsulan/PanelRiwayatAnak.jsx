import { useState } from 'react';
import { Button, Card, Form, Table } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Fields } from 'redux-form';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectStatusKeluarga';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };
  const [fields, setFields] = useState({
    name: '',
    birth_place: '',
    birth_date: '',
    sex: 'L',
    pekerjaan: '',
    status_keluarga: '',
    status_tunjangan: '',
    bln_dibayar: '',
    bln_akhir_dibayar: ''
  });
  const onChangeField = (e, key) => {
    fields[key] = e.target.value;
    setFields({ ...fields });
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Anak</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>NAMA</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nama"
            value={fields?.name}
            onChange={(e) => {
              onChangeField(e, 'name');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>TEMPAT LAHIR</Form.Label>
          <Form.Control
            type="text"
            placeholder="..."
            value={fields?.birth_place}
            onChange={(e) => {
              onChangeField(e, 'birth_place');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>TANGGAL LAHIR</Form.Label>
          <Form.Control
            type="date"
            placeholder="..."
            value={fields?.birth_date}
            onChange={(e) => {
              onChangeField(e, 'birth_date');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>JENIS KELAMIN</Form.Label>
          <SelectSex
            value={fields?.sex}
            onChange={(e) => {
              onChangeField(e, 'sex');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PEKERJAAN</Form.Label>
          <Form.Control
            type="text"
            placeholder="..."
            value={fields?.pekerjaan}
            onChange={(e) => {
              onChangeField(e, 'pekerjaan');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>STATUS KELUARGA</Form.Label>
          <SelectStatusKeluarga
            value={fields?.status_keluarga}
            onChange={(e) => {
              onChangeField(e, 'status_keluarga');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>{' '}
        <Form.Group className="mb-3">
          <Form.Label>STATUS TUNJANGAN</Form.Label>
          <SelectDapatTunjangan
            value={fields?.status_tunjangan}
            onChange={(e) => {
              onChangeField(e, 'status_tunjangan');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>{' '}
        <Form.Group className="mb-3">
          <Form.Label>BLN DIBAYAR</Form.Label>
          <Form.Control
            type="date"
            placeholder="..."
            value={fields?.bln_dibayar}
            onChange={(e) => {
              onChangeField(e, 'bln_dibayar');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>BLN AKHIR DIBAYAR</Form.Label>
          <Form.Control
            type="date"
            placeholder="..."
            value={fields?.bln_akhir_dibayar}
            onChange={(e) => {
              onChangeField(e, 'bln_akhir_dibayar');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};
const DaftarRiwayat = (props) => {
  const onCreateNew = () => {
    props.setActivePanel('form');
  };
  return (
    <Card>
      <Card.Header>
        Daftar Riwayat Anak{' '}
        <Button onClick={onCreateNew} className="btn-rounded text-capitalize" variant={'primary'} style={{ float: 'right' }}>
          Tambah Usulan
        </Button>
      </Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Daftar Anak</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
const PanelRiwayatAnak = (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
export default PanelRiwayatAnak;
