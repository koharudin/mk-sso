import { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from './Button';
import { FaDownload } from 'react-icons/fa';

export default (props) => {
  const [file, setFile] = useState();
  const [name, setName] = useState('');
  const [isObject, setIsObject] = useState(false);
  useEffect(() => {
    if (props?.value) {
      if (Array.isArray(props?.value)) {
      } else {
        setIsObject(typeof props?.value[0] == 'object');
        setName(props?.value[0].name);
      }
    }
  }, [props]);
  function download(dataurl, filename) {
    const link = document.createElement('a');
    link.href = dataurl;
    link.download = filename;
    link.click();
  }
  const doDownload = () => {
    if (isObject) {
      const currFile = props?.value[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        download(reader.result, 'download file');
      });
      reader.readAsDataURL(currFile);
    }
  };
  return (
    <>
      {props?.readOnly ? (
        <>
          {props?.value?.constructor ==Array && <>
            {props?.value?.map((v,i)=>{
              return <> <Button  size={"sm"}  onClick={()=>{
                window.open(process.env.REACT_APP_BACKEND_SERVER+"/api/view_dokumen/"+v)
              }}><FaDownload/> Lihat Dokumen {i+1}</Button></>
            })}
          </>}
          {isObject && (
            <>
              <Button size={"sm"} onClick={doDownload}>Lihat Dokumen</Button>
            </>
          )}
        </>
      ) : (
        <Form.Control
          multiple={props?.multiple}
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
