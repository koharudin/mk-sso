import { Card, Table } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import { useEffect } from 'react';

const StepWizardKonfirmasiSubmit = (props) => {

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h5">Konfirmasi Submit</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped  responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aksi</td>
                <td>{props?.data?.action}</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>{props?.data?.selectedData?.id}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </>
  );
};
export default StepWizardKonfirmasiSubmit;
