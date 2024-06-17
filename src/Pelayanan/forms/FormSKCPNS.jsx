import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import SelectPangkat from '../components/SelectPangkat';
import SelectPejabatPenetap from '../components/SelectPejabatPenetap';

export default (props) => {
  const [fields, setFields] = useState({
    pangkat_id: '',
    pangkat_text: '',
    no_sk: '',
    tgl_sk: null,
    tmt_cpns: null,
    pejabat_penetap_id: '',
    pejabat_penetap_nip: '',
    pejabat_penetap_nama: '',
    pejabat_penetap_jabatan: '',
    tgl_tugas: null,
    no_sk_penyesuaian_mk: null,
    tgl_sk_penyesuaian_mk: null,
    tmt_sk_penyesuaian_mk: null,
    pejabat_penetap_id_sk_penyesuaian_mk: '',
    pejabat_penetap_nip_sk_penyesuaian_mk: '',
    pejabat_penetap_nama_sk_penyesuaian_mk: '',
    pejabat_penetap_jabatan_sk_penyesuaian_mk: '',
    tambahan_bulan: '',
    tambahan_tahun: '',
    total_tahun: '',
    total_bulan: ''
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
    } else if (key == 'pejabat_penetap_id') {
      fields[key] = e?.id;
      fields['pejabat_penetap_nip'] = e?.nip;
      fields['pejabat_penetap_nama'] = e?.nama;
      fields['pejabat_penetap_jabatan'] = e?.jabatan;
    } else if (key == 'pejabat_penetap_id_sk_penyesuaian_mk') {
      fields[key] = e?.id;
      fields['pejabat_penetap_sk_penyesuaian_mk_nip'] = e?.nip;
      fields['pejabat_penetap_sk_penyesuaian_mk_nama'] = e?.nama;
      fields['pejabat_penetap_sk_penyesuaian_mk_jabatan'] = e?.jabatan;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
    //setFields(fields);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PANGKAT</Form.Label>
        <SelectPangkat
          readOnly={props?.disabledAll}
          placeholder="PANGKAT"
          value={fields?.pangkat_id}
          onChange={(e) => {
            onChangeField(e, 'pangkat_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SK</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO SK"
          value={fields?.no_sk}
          onChange={(e) => {
            onChangeField(e, 'no_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL SK</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL SK"
          value={fields?.tgl_sk}
          onChange={(e) => {
            onChangeField(e, 'tgl_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TMT CPNS</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TMT CPNS"
          value={fields?.tmt_cpns}
          onChange={(e) => {
            onChangeField(e, 'tmt_cpns');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <fieldset class="border p-1">
        <legend class="float-none w-auto" style={{ fontSize: '14px', fontWeight: 'bold' }}>
          PEJABAT YANG MENETAPKAN SK CPNS
        </legend>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>PEJABAT PENETAP</Form.Label>
          <SelectPejabatPenetap
            readOnly={props?.disabledAll}
            placeholder="PEJABAT PENETAP"
            value={fields?.pejabat_penetap_id}
            onChange={(e) => {
              onChangeField(e, 'pejabat_penetap_id');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </fieldset>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGAL TUGAS</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TANGGAL TUGAS"
          value={fields?.tgl_tugas}
          onChange={(e) => {
            onChangeField(e, 'tgl_tugas');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA KERJA TAHUN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="MASA KERJA TAHUN"
          value={fields?.masakerja_tahun}
          onChange={(e) => {
            onChangeField(e, 'masakerja_tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA KERJA BULAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="MASA KERJA BULAN"
          value={fields?.masakerja_bulan}
          onChange={(e) => {
            onChangeField(e, 'masakerja_bulan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <fieldset class="border p-1">
        <legend class="float-none w-auto" style={{ fontSize: '14px', fontWeight: 'bold' }}>
          PENYESUAIAN MASA KERJA
        </legend>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>NO SK</Form.Label>
          <Form.Control
            readOnly={props?.disabledAll}
            type="text"
            placeholder="NO SK"
            value={fields?.no_sk_penyesuaian_mk}
            onChange={(e) => {
              onChangeField(e, 'no_sk_penyesuaian_mk');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>TGL SK</Form.Label>
          <Form.Control
            readOnly={props?.disabledAll}
            type="date"
            placeholder="TGL SK"
            value={fields?.tgl_sk_penyesuaian_mk}
            onChange={(e) => {
              onChangeField(e, 'tgl_sk_penyesuaian_mk');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>TMT SK</Form.Label>
          <Form.Control
            readOnly={props?.disabledAll}
            type="date"
            placeholder="TMT SK"
            value={fields?.tmt_sk_penyesuaian_mk}
            onChange={(e) => {
              onChangeField(e, 'tmt_sk_penyesuaian_mk');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>PEJABAT PENETAP</Form.Label>
          <SelectPejabatPenetap
            readOnly={props?.disabledAll}
            placeholder="PEJABAT PENETAP"
            value={fields?.pejabat_penetap_id_sk_penyesuaian_mk}
            onChange={(e) => {
              onChangeField(e, 'pejabat_penetap_id_sk_penyesuaian_mk');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>TAMBAHAN MASA KERJA (TAHUN)</Form.Label>
          <Form.Control
            readOnly={props?.disabledAll}
            type="number"
            placeholder="TAMBAHAN MASA KERJA (TAHUN)"
            value={fields?.tambahan_tahun}
            onChange={(e) => {
              onChangeField(e, 'tambahan_tahun');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>TAMBAHAN MASA KERJA (BULAN)</Form.Label>
          <Form.Control
            readOnly={props?.disabledAll}
            type="number"
            placeholder="TAMBAHAN MASA KERJA (BULAN)"
            value={fields?.tambahan_bulan}
            onChange={(e) => {
              onChangeField(e, 'tambahan_bulan');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>TEMPAT</Form.Label>
          <Form.Control
            readOnly={props?.disabledAll}
            type="text"
            placeholder="TEMPAT"
            value={fields?.tempat}
            onChange={(e) => {
              onChangeField(e, 'tempat');
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </fieldset>
      <hr></hr>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA KERJA AKUMULASI (TAHUN)</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="MASA KERJA AKUMULASI (TAHUN)"
          value={fields?.total_tahun}
          onChange={(e) => {
            onChangeField(e, 'total_tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA KERJA AKUMULASI (BULAN)</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="MASA KERJA AKUMULASI (BULAN))"
          value={fields?.total_bulan}
          onChange={(e) => {
            onChangeField(e, 'total_bulan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
