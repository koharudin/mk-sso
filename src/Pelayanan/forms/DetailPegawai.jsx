import { Form } from 'react-bootstrap';

export default (props) => {
  const {employee,...otherProps} = props
  return (
    <Form>
      <Form.Group>
        <Form.Label>NAMA </Form.Label>
        <Form.Control readOnly type="text" value={employee?.first_name}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>NIP </Form.Label>
        <Form.Control readOnly type="text" value={employee?.nip_baru}></Form.Control>
      </Form.Group>
    </Form>
  );
};
