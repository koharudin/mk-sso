import { Form } from "react-bootstrap";

export default  (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={'ct'}>CUTI TAHUNAN</option>
      <option value={'csk'}>CUTI SAKIT</option>
      <option value={'cbs'}>CUTI BESAR</option>
      <option value={'cb1'}>CUTI BERSALIN ANAK 1</option>
      <option value={'cb2'}>CUTI BERSALIN ANAK 2</option>
      <option value={'cb3'}>CUTI BERSALIN ANAK 3</option>
      <option value={'cbgt3'}>CUTI BERSALIN ANAK 4</option>
      <option value={'cap'}>CUTI ALASAN PENTING</option>
    </Form.Control>
  );
};
