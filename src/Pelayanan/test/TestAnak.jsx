import { Card } from 'react-bootstrap';
import FormRiwayatAnak from '../forms/FormRiwayatAnak';
import FormRiwayatJabatan from '../forms/FormRiwayatJabatan';

import FormRiwayatPengalamanKerja from '../forms/FormRiwayatPengalamanKerja';
import FormRiwayatPangkat from '../forms/FormRiwayatPangkat';
import FormRiwayatAngkaKredit from '../forms/FormRiwayatAngkaKredit';

export default () => {
  return (
    <div style={{ padding: '10px' }}>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}>Test </Card.Title>
        </Card.Header>
        <Card.Body>
          <FormRiwayatAngkaKredit recordData={{ unit_kerja_id: 53, pangkat_id: 22 }}></FormRiwayatAngkaKredit>
        </Card.Body>
      </Card>
    </div>
  );
};
