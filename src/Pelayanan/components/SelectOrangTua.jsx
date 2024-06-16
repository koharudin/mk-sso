import { Form } from 'react-bootstrap';

export default (props) => {
  const options = [
    "Ayah","Ibu","Mertua (Ayah)","Mertua (Ibu)"
  ]
  return (
    <>
      {props?.readOnly ? (
        <>
          <Form.Control readOnly={props?.readOnly} value={options[props?.value-1]}></Form.Control>
        </>
      ) : (
        <Form.Control placeholder="..." {...props} as="select">
          <option>Pilih</option>
          {props?.type == 'orangtua' && (
            <>
              <option value={'1'}>Ayah</option>
              <option value={'2'}>Ibu</option>
            </>
          )}
          {props?.type == 'mertua' && (
            <>
              <option value={'3'}>Mertua Ayah</option>
              <option value={'4'}>Mertua Ibu</option>
            </>
          )}
        </Form.Control>
      )}
    </>
  );
};
