import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectTahun from '../components/SelectTahun';

const FormRiwayatDP3 = () => {
  const [fields, setFields] = useState({
    kesetiaan: '',
    prestasi: '',
    tanggung_jawab: '',
    ketaatan: '',
    kejujuran: '',
    kerjasama: '',
    prakarsa: '',
    kepemimpinan: '',
    tahun: ''
  });
  const onChangeField = (e, key) => {
    fields[key] = e.target?.value;
    setFields({ ...fields });
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TAHUN</Form.Label>
        <SelectTahun
          type="text"
          placeholder="TAHUN"
          value={fields?.tahun}
          onChange={(e) => {
            onChangeField(e, 'tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KESETIAAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="KESETIAAN"
          value={fields?.kesetiaan}
          onChange={(e) => {
            onChangeField(e, 'kesetiaan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGUNG JAWAB</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="TANGGUNG JAWAB"
          value={fields?.tanggung_jawab}
          onChange={(e) => {
            onChangeField(e, 'tanggung_jawab');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KETAATAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="KETAATAN"
          value={fields?.ketaatan}
          onChange={(e) => {
            onChangeField(e, 'ketaatan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KEJUJURAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="KEJUJURAN"
          value={fields?.kejujuran}
          onChange={(e) => {
            onChangeField(e, 'kejujuran');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KERJASAMA</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="KERJASAMA"
          value={fields?.kerjasama}
          onChange={(e) => {
            onChangeField(e, 'kerjasama');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PRAKARSA</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="PRAKARSA"
          value={fields?.prakarsa}
          onChange={(e) => {
            onChangeField(e, 'prakarsa');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KEPEMIMPINAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="KEPEMIMPINAN"
          value={fields?.kepemimpinan}
          onChange={(e) => {
            onChangeField(e, 'kepemimpinan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

    </>
  );
};
export default FormRiwayatDP3;
