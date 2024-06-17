import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import SelectPangkat from '../components/SelectPangkat';
import SelectUnitKerja from '../components/SelectUnitKerja';

export default (props) => {
  const [fields, setFields] = useState({
    no_bkn: '',
    tgl_bkn: null,
    no_sk: '',
    tgl_pensiun: null,
    tmt_pensiun: null,
    pangkat_id: '',
    pangkat_text: '',
    masa_kerja_tahun: '',
    masa_kerja_bulan: '',
    unitkerja_id: '',
    unitkerja_text: ''
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
    if (key == 'pangkat_id') {
      fields[key] = e?.id;
      fields['pangkat_text'] = e?.name;
    } else if (key == 'unitkerja_id') {
      fields[key] = e?.id;
      fields['unitkerja_text'] = e?.name;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
    //setFields(fields);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO BKN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO BKN"
          value={fields?.no_bkn}
          onChange={(e) => {
            onChangeField(e, 'no_sumpah');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL BKN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL BKN"
          value={fields?.tgl_bkn}
          onChange={(e) => {
            onChangeField(e, 'tgl_bkn');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SK PENSIUN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO SK PENSIUN"
          value={fields?.no_sk}
          onChange={(e) => {
            onChangeField(e, 'no_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGAL PENSIUN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TANGGAL PENSIUN"
          value={fields?.tgl_pensiun}
          onChange={(e) => {
            onChangeField(e, 'no_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TMT PENSIUN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TMT PENSIUN"
          value={fields?.tmt_pensiun}
          onChange={(e) => {
            onChangeField(e, 'tmt_pensiun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PANGKAT</Form.Label>
        <SelectPangkat
          placeholder="PANGKAT"
          readOnly={props?.disabledAll}
          value={fields?.pangkat_id}
          onChange={(e) => {
            onChangeField(e, 'pangkat_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA KERJA TAHUN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="MASA KERJA TAHUN"
          value={fields?.masa_kerja_tahun}
          onChange={(e) => {
            onChangeField(e, 'masa_kerja_tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA KERJA BULAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="MASA KERJA BULAN"
          value={fields?.masa_kerja_bulan}
          onChange={(e) => {
            onChangeField(e, 'masa_kerja_bulan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>UNIT KERJA</Form.Label>
        <SelectUnitKerja
          placeholder="UNIT KERJA"
          readOnly={props?.disabledAll}
          value={fields?.unitkerja_id}
          onChange={(e) => {
            onChangeField(e, 'unitkerja_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
