import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Panel from '../panels/PanelRiwayatSKPNS';
import { ApiCall } from '../../Api/api';

export default () => {
  const [recordData, setRecordData] = useState({ jenis_kelamin: 'P', pangkat_id: 31 });
  
  return (
    <div style={{ padding: '10px' }}>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}>Test </Card.Title>
        </Card.Header>
        <Card.Body>
          {JSON.stringify(recordData)}
          <hr></hr>
          <Panel activePanel={'init'} ></Panel>
        </Card.Body>
      </Card>
    </div>
  );
};
