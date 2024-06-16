import { Form } from 'react-bootstrap';
export default (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={'Optimal'}>Optimal</option>
      <option value={'Cukup Optimal'}>Cukup Optimal</option>
      <option value={'Kurang Optimal'}>Kurang Optimal</option>
    </Form.Control>
  );
};
