import SelectJenisLayanan from '../components/SelectJenisLayanan';
import ButtonWizard from './ButtonWizard';

export default (props) => {
  return(
    <>
      Pilih Layanan <hr></hr>
      <div>
        <SelectJenisLayanan onChange={(val,o)=>{
          props?.setData({...props?.data,...{selectedLayanan:o}})
          props.nextStep()
        }}></SelectJenisLayanan>
        <br></br>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
