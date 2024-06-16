import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
export default (props) => {
  const [fields, setFields] = useState({
    no_sumpah: '',
    tgl_sumpah: null,
    keterangan: ''
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
    fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SUMPAH</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="NO SUMPAH"
          value={fields?.no_sumpah}
          onChange={(e) => {
            onChangeField(e, 'no_sumpah');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL SUMPAH</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL SUMPAH"
          value={fields?.tgl_sumpah}
          onChange={(e) => {
            onChangeField(e, 'tgl_sumpah');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KETERANGAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="KETERANGAN"
          value={fields?.keterangan}
          onChange={(e) => {
            onChangeField(e, 'keterangan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
