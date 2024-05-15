import { Form } from "react-bootstrap";

const SelectStatusKeluarga = (props) => {
  return (
    <Form.Control placeholder="..." {...props} as="select">
      <option>Pilih</option>
      <option value={'K'}>Kandung</option>
      <option value={'T'}>Tiri</option>
      <option value={'A'}>Angkat</option>
    </Form.Control>
  );
};
export default SelectStatusKeluarga;
