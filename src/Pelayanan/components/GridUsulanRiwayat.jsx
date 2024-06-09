import { Card, OverlayTrigger } from 'react-bootstrap';
import RemoteGrid from './RemoteGrid';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi';
import { useEffect } from 'react';
import { useState } from 'react';
import { AppInformasiError, AppKonfirmasi } from './App';
import { MdAddToPhotos } from 'react-icons/md';
import Button from './Button';

export default (props) => {
  const [cols, setCols] = useState();
  const indexCols = [
    {
      label: '#',
      field: '__rowIndex__'
    }
  ];
  const onCreateNew = ()=>{
    props?.onCreateNew()
  }
  const onEdit = (row, index) => {
    props.setAction("2")
    props.setRecordId(row[props?.recordIdName])
    props.setRefData(row)
    props.setRecordData(row)
    props.setActiveForm('form');
  };

  const buttonCols = [
    {
      label: '#',
      formatter: function (value, row, index) {
        return (
          <>
            <Button
              useTooltip
              tooltipText="Membuat Usulan untuk Perubahan data ini"
              bg="primary"
              className="btn-rounded text-capitalize"
              onClick={() => {
                onEdit(row, index);
              }}
            >
              <BsFillPencilFill /> Ubah
            </Button>
            <Button
              useTooltip
              tooltipText="Membuat Usulan untuk Penghapusan  data ini"
              bg="danger"
              className="btn-rounded text-capitalize"
              onClick={() => {
                props.setRefData(row)
                props.onDelete( props.setRecordId(row[props?.recordIdName]))
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
    setCols([...buttonCols, ...indexCols, ...props?.cols]);
  }, []);
  return (
    <Card>
      <Card.Header>
        <Card.Title as={"h5"}> {props?.title}</Card.Title>
        <Button
          useTooltip
          tooltipText="Membuat Usulan untuk menambah data baru"
          onClick={onCreateNew}
          className="btn-rounded text-capitalize"
          variant={'primary'}
          style={{ float: 'right' }}
        >
          <MdAddToPhotos /> Tambah Usulan
        </Button>
      </Card.Header>
      <Card.Body>
        <RemoteGrid {...props} cols={cols}></RemoteGrid>
      </Card.Body>
    </Card>
  );
};
