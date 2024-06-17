import { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from './Button';

export default (props) => {
  const [file, setFile] = useState();
  const [name, setName] = useState('');
  const [isObject,setIsObject] = useState(false)
  useEffect(() => {
    if (props?.value) {
        setIsObject(typeof props?.value[0] == 'object')
        setName(props?.value[0].name);
    }
  }, [props]);
  function download(dataurl, filename) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
  }
  const doDownload = () => {
    if(isObject){
        const currFile = props?.value[0];
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            download(reader.result,"download file")
          });
        reader.readAsDataURL(currFile);
    }
  };
  return (
    <>
      {props?.readOnly ? (
        <>
          {isObject && <><Button onClick={doDownload}>Download</Button></>}
          {!isObject && <><Form.Control readOnly={props?.readOnly} value={name}></Form.Control></>}
          
        </>
      ) : (
        <Form.Control
          readOnly={props?.disabledAll}
          type="file"
          onChange={(e) => {
            setFile(e.target.files);
            if (props?.onChangeField) {
              props?.onChangeField(e, props?.name);
            }
          }}
        />
      )}{' '}
    </>
  );
};
