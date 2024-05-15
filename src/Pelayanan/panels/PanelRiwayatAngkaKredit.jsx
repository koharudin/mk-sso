import { useState } from 'react';
import { Button, Card, Form, Table } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Fields } from 'redux-form';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectStatusKeluarga';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';
import FormRiwayatAnak from '../forms/FormRiwayatAnak';

const FormInput = (props) => {
  const onBatal = () => {
    props.setActivePanel('grid');
  };
  
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Anak</Card.Title>
      </Card.Header>
      <Card.Body>
        <FormRiwayatAnak {...props} />
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
        Daftar Riwayat Angka Kredit
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
const PanelRiwayatAngkaKredit = (props) => {
  const [activePanel, setActivePanel] = useState('grid');
  return (
    <>
      {activePanel == 'grid' && <DaftarRiwayat setActivePanel={setActivePanel}></DaftarRiwayat>}
      {activePanel == 'form' && <FormInput setActivePanel={setActivePanel}></FormInput>}
    </>
  );
};
export default PanelRiwayatAngkaKredit;
