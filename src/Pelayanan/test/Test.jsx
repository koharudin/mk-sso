import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Panel from '../forms/FormDataTidakTerekam';
import { ApiCall } from '../../Api/api';
import Button from '../components/Button';
import UploadFile from '../components/UploadFile';
import FormCuti from '../forms/FormCuti';
import ButtonLoading from '../components/ButtonLoading';

export default () => {
  const [recordData, setRecordData] = useState({ jenis_kelamin: 'P', pangkat_id: 31 });
  const [readOnly, setReadOnly] = useState();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState();
  const [fields, setFields] = useState({
    files: ''
  });
  const onChangeField = (e, key) => {
    fields[key] = e.target.files;
    debugger;
    setFields({ ...fields });
  };
  const doSimpan = () => {
    setIsLoadingSubmit(true);
    setTimeout(()=>{
      ApiCall.post('/test-upload', fields, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {})
        .catch((err) => {})
        .finally(() => {
         // setIsLoadingSubmit(false);
        });
    },3000)
    
  };
  function download(dataurl, filename) {
    const link = document.createElement('a');
    link.href = dataurl;
    link.download = filename;
    link.click();
  }
  const doDownload = () => {
    const file = fields['file'][0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      download(reader.result, 'download file');
    });
    reader.readAsDataURL(file);
  };
  return (
    <div style={{ padding: '10px' }}>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}>Test </Card.Title>
        </Card.Header>
        <Card.Body>
          {JSON.stringify(recordData)}
          <hr></hr>
          <FormCuti />
        </Card.Body>
        <Card.Footer>
          <Button
            onClick={() => {
              doDownload();
            }}
          >
            Download
          </Button>
          <Button
            onClick={() => {
              setReadOnly(!readOnly);
            }}
          >
            Konfirmasi
          </Button>
          <ButtonLoading isLoading={isLoadingSubmit}
            style={{ float: 'right' }}
            onClick={() => {
              doSimpan();
            }}
            name="Simpan ke DB"
          />
        </Card.Footer>
      </Card>
    </div>
  );
};
