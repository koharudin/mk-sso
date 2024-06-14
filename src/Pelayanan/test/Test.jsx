import { Button, Card, Image } from 'react-bootstrap';
import FormDataTidakTerekam from '../forms/FormDataTidakTerekam';
import { useEffect, useRef, useState } from 'react';
export default (props) => {
  const [editedData, setEditedData] = useState();
  const [downloadable, setDownloadable] = useState();
  const ref = useRef()
  const changeListener = (data) => {
    setEditedData(data);
    console.log(data);
  };
  const downloadFile = () => {
    if (editedData && editedData.file) {
      
      var reader = new FileReader();
      reader.onloadend = function (e) {
        window.open(reader.result);
      };
      reader.readAsDataURL(editedData.file[0])
    }
  };
  useEffect(() => {
    if (editedData && editedData.file) {
      setDownloadable(true);
    }
  }, [editedData]);
  return (
    <Card>
      {JSON.stringify(editedData)}
      <Card.Header>
        <Card.Title>Test </Card.Title>
      </Card.Header>
      <Card.Body>
        <FormDataTidakTerekam changeListener={changeListener} />
      </Card.Body>
      <Card.Footer>{downloadable && <Button onClick={downloadFile}>Download</Button>}</Card.Footer>

    </Card>
  );
};
