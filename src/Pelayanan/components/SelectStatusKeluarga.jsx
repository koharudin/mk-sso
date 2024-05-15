import { Form } from "react-bootstrap";

const SelectDapatTunjangan = (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={1}>Dapat</option>
      <option value={0}>Tidak</option>
    </Form.Control>
  );
};
export default SelectDapatTunjangan;
