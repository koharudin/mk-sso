import { Form } from "react-bootstrap";

export default (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={'L'}>Laki-Laki</option>
      <option value={'P'}>Perempuan</option>
    </Form.Control>
  );
};
