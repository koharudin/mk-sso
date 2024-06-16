import { Form } from "react-bootstrap";

export default (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={'SKT'}>SJT</option>
      <option value={'AC'}>AC</option>
      <option value={'CACT'}>CACT</option>
    </Form.Control>
  );
};
