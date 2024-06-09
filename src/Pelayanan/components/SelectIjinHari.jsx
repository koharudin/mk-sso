import { Form } from "react-bootstrap";

export default  (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={'dm'}>DINAS DALAM NEGERI</option>
      <option value={'dl'}>DINAS LUAR NEGERI</option>
    </Form.Control>
  );
};
