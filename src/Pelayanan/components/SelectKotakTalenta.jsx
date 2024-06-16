import { Form } from 'react-bootstrap';

export default (props) => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      {boxes.map((v, i) => {
        return <option values={v}>KOTAK {v}</option>;
      })}
    </Form.Control>
  );
};
