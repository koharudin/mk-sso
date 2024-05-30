import { Form } from "react-bootstrap";

export default (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={'1'}>Ayah</option>
      <option value={'2'}>Ibu</option>
    </Form.Control>
  );
};
