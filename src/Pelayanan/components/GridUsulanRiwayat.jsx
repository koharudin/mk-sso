import { Button, Card } from 'react-bootstrap';
import RemoteGrid from './RemoteGrid';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi';
import { useEffect } from 'react';
import { useState } from 'react';

export default (props) => {
  const [cols, setCols] = useState();
  const buttonCols = [
    {
      label: '#',
      formatter: function (value, row, index) {
        return (
          <>
            <Button
              bg="primary"
              className="btn-rounded text-capitalize"
              onClick={() => {
                alert(index);
              }}
            >
              <BsFillPencilFill /> Ubah
            </Button>
            <Button bg="danger" className="btn-rounded text-capitalize">
              <FiDelete /> Hapus
            </Button>
          </>
        );
      }
    }
  ];
  useEffect(() => {
    setCols([...props?.cols, ...buttonCols]);
  }, []);
  return (
    <Card>
      <Card.Header>
        Daftar Riwayat Anak{' '}
        <Button onClick={props?.onCreateNew} className="btn-rounded text-capitalize" variant={'primary'} style={{ float: 'right' }}>
          Tambah Usulan
        </Button>
      </Card.Header>
      <Card.Body>
        <RemoteGrid {...props} cols={cols}></RemoteGrid>
      </Card.Body>
    </Card>
  );
};
