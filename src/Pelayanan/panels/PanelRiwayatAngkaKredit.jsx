import { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

import Moment from 'react-moment';
import GridUsulanRiwayat from '../components/GridUsulanRiwayat';
import { NumericFormat, PatternFormat, numericFormatter } from 'react-number-format';
import FormRiwayatAngkaKredit from '../forms/FormRiwayatAngkaKredit';
import PanelKonfirmasiUsulan from './PanelKonfirmasiUsulan';
import { FaSave } from 'react-icons/fa';

const FormInput = (props) => {
  const [editedData,setEditedData] = useState()
  useEffect(()=>{
    if(props?.propsWizard?.data?.selectedData){
      setEditedData({...props?.propsWizard?.data?.selectedData})
    }
  },[props?.propsWizard?.data?.selectedData])
  const onSubmit = ()=>{
    if(props?.onSubmit){
      props?.onSubmit(props?.propsWizard?.data?.selectedLayanan?.id,props?.propsWizard?.data?.action,props?.propsWizard?.data?.selectedData?.id,JSON.stringify(props?.propsWizard?.data?.selectedData),JSON.stringify(editedData),props?.propsWizard?.lastStep);
      
   }
   else {
     AppInformasiError({options:{text:"function onSubmit tidak ditemukan"}});
   }
  }
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5">Form Riwayat Angka Kredit</Card.Title>
      </Card.Header>
      <Card.Body>
        {props?.propsWizard?.data?.action ==1&& <><FormRiwayatAngkaKredit {...props}  /></>}
        {props?.propsWizard?.data?.action ==2 && <><Row></Row><Row><Col lg="6"><FormRiwayatAngkaKredit disabledAll {...props} recordData={props?.propsWizard?.data?.selectedData} /></Col><Col lg="6"><FormRiwayatAngkaKredit  {...props} recordData={props?.propsWizard?.data?.selectedData} setEditedData={setEditedData} /></Col></Row></>}
      </Card.Body>
      <Card.Footer>
        <Button style={{float:"right"}} size='sm' variant='primary' onClick={onSubmit}><FaSave/> Simpan</Button>
      </Card.Footer>
    </Card>
  );
};
const DaftarRiwayat = (props) => {
  const onCreateNew = () => {
    props.setActiveForm('form');
  };

  return (
    <GridUsulanRiwayat
      {...props}
      onCreateNew={onCreateNew}
      title={'Daftar Riwayat Angka Kredit'}
      grid_url={'/riwayat-angka-kredit'}
      cols={[
        {
          label: 'NO SK',
          field: 'no_sk'
        },
        {
          label: 'TGL SK',
          field: 'tgl_sk'
        },
        {
          label: 'TGL AWAL PENILAIAN',
          field: 'dt_awal_penilaian',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'TGL AKHIR PENILAIAN',
          field: 'dt_akhir_penilaian',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        },
        {
          label: 'JABATAN',
          field: 'jabatan'
        },
        {
          label: 'UNIT KERJA',
          field: 'unit_kerja'
        },
        {
          label: 'PANGKAT',
          field: 'obj_pangkat',
          formatter: function (value, row, index) {
            return (
              <>
                {' '}
                {value.name} / {row['pangkat_id']}{' '}
              </>
            );
          }
        },
        {
          label: 'AK LAMA',
          field: 'ak_lama',
          formatter: function (value, row, index) {
            return (
              <>
                {numericFormatter(value, {
                  decimalSeparator: ',',
                  thousandSeparator: '.',
                  decimalScale: 2
                })}
              </>
            );
          }
        },
        {
          label: 'AK BARU',
          field: 'ak_baru',
          formatter: function (value, row, index) {
            return (
              <>
                {numericFormatter(value, {
                  decimalSeparator: ',',
                  thousandSeparator: '.',
                  decimalScale: 2
                })}
              </>
            );
          }
        },
        {
          label: 'TMT PAK',
          field: 'tmt_pak',
          formatter: function (value, row, index) {
            return <Moment date={value} format="DD/MMM/YYYY" />;
          }
        }
      ]}
    />
  );
};
const PanelRiwayatAngkaKredit = (props) => {
  const initActiveForm = "grid"
  const [activeForm,setActiveForm] = useState(initActiveForm)
  const [refData,setRefData] = useState()
  const [recordData,setRecordData] = useState()
  const [action,setAction] = useState()
  

  useEffect(()=>{
    if(props?.propsWizard?.currentStep!=3){
      setActiveForm(initActiveForm)
    }
  },[props?.propsWizard?.currentStep])
  return (
    <>
      {props?.activePanel == 'init' && (
        <>
          {!activeForm && <DaftarRiwayat refData={refData} recordData={recordData} setRefData={setRefData} setRecordData={setRecordData}  {...props} setActiveForm={setActiveForm} propsWizard={props?.propsWizard} />}
          {activeForm == 'grid' && <DaftarRiwayat refData={refData} recordData={recordData}  {...props} setActiveForm={setActiveForm} propsWizard={props?.propsWizard} />}
          {activeForm == 'form' && <FormInput {...props} refData={refData} recordData={recordData} setRefData={setRefData} setRecordData={setRecordData}  setActiveForm={setActiveForm} propsWizard={props?.propsWizard} />}
          {activeForm == 'konfirmasiUsulan' && <PanelKonfirmasiUsulan {...props} setActiveForm={setActiveForm} propsWizard={props?.propsWizard} />}
        </>
      )}

      {props?.activePanel == 'detail' && <FormRiwayatAngkaKredit disabledAll {...props} propsWizard={props?.propsWizard} />}
    </>
  );
};
export default PanelRiwayatAngkaKredit;
