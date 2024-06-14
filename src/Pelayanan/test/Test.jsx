import { Card } from 'react-bootstrap';
import FormRiwayatDiklatStruktural from '../forms/FormRiwayatDiklatStruktural';
import { useState } from 'react';

export default () => {
  const [recordData,setRecordData] = useState({ jenis_diklat_siasn: 8, jenis_diklat_siasn: 7 })
  return (
    <div style={{ padding: '10px' }}>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}>Test </Card.Title>
        </Card.Header>
        <Card.Body>
          {JSON.stringify(recordData)}
          <FormRiwayatDiklatStruktural recordData={recordData}></FormRiwayatDiklatStruktural>
        </Card.Body>
      </Card>
    </div>
  );
};
