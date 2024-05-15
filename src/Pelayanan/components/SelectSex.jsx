import { Form } from "react-bootstrap";

const SelectSex = (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={'L'}>Laki-Laki</option>
      <option value={'P'}>Perempuan</option>
    </Form.Control>
  );
};
export default SelectSex;
