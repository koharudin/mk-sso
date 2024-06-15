import { Card } from 'react-bootstrap';
import FormRiwayat from '../forms/FormRiwayatHukuman';
import { useState } from 'react';

export default () => {
  const [recordData,setRecordData] = useState({ jenis_kenaikan: 3,pangkat_id:31})
  return (
    <div style={{ padding: '10px' }}>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}>Test </Card.Title>
        </Card.Header>
        <Card.Body>
          {JSON.stringify(recordData)}
          <hr></hr>
          <FormRiwayat recordData={recordData}></FormRiwayat>
        </Card.Body>
      </Card>
    </div>
  );
};
