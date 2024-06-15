import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectTahun from '../components/SelectTahun';

export default (props) => {
  const [fields, setFields] = useState({
    kesetiaan: null,
    prestasi:  null,
    tanggung_jawab:  null,
    ketaatan:  null,
    kejujuran:  null,
    kerjasama: null,
    prakarsa:  null,
    kepemimpinan:  null,
    tahun: ''
  });
  useEffect(() => {
    if (props?.refData) {
      setFields({ ...props?.refData });
    }
  }, [props?.refData]);

  useEffect(() => {
    if (props?.recordData) {
      setFields({ ...props?.recordData });
    }
  }, [props?.recordData]);

  useEffect(() => {
    if (props?.changeListener) {
      props?.changeListener({ ...fields });
    }
  }, [fields]);
  const onChangeField = (e, key) => {
    if (key == 'tahun') {
      fields[key] = e;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TAHUN</Form.Label>
        <SelectTahun readOnly={props?.disabledAll}
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
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="KESETIAAN"
          value={fields?.kesetiaan}
          onChange={(e) => {
            onChangeField(e, 'kesetiaan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PRESTASI</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="PRESTASI"
          value={fields?.prestasi}
          onChange={(e) => {
            onChangeField(e, 'prestasi');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGUNG JAWAB</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
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
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
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
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
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
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
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
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
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
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
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
