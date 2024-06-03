import { Button, Card } from 'react-bootstrap';
import RemoteGrid from './RemoteGrid';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi';
import { useEffect } from 'react';
import { useState } from 'react';
import { AppKonfirmasi } from './App';
import { MdAddToPhotos } from 'react-icons/md';

export default (props) => {
  const [cols, setCols] = useState();
  const indexCols = [
    {
      label: '#',
      field: '__rowIndex__'
    }
  ];
  const onDelete = (row, index) => {
    props.propsWizard.setData({ ...props?.propsWizard?.data, ...{ action: 3,selectedData: row } });
    props.propsWizard.lastStep();
  };
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
            <Button
              bg="danger"
              className="btn-rounded text-capitalize"
              onClick={() => {
                AppKonfirmasi({
                  title: 'Konfirmasi',
                  html: 'Apakah anda yakin akan mengajukan usulan menghapus data ini?',
                  onConfirmed: () => {
                    onDelete(row, index);
                  }
                });
              }}
            >
              <FiDelete /> Hapus
            </Button>
          </>
        );
      }
    }
  ];
  useEffect(() => {
    setCols([...buttonCols,...indexCols, ...props?.cols ]);
  }, []);
  return (
    <Card>
      <Card.Header>
        {props?.title}
        <Button onClick={props?.onCreateNew} className="btn-rounded text-capitalize" variant={'primary'} style={{ float: 'right' }}>
        <MdAddToPhotos /> Tambah Usulan
        </Button>
      </Card.Header>
      <Card.Body>
        <RemoteGrid {...props} cols={cols}></RemoteGrid>
      </Card.Body>
    </Card>
  );
};
