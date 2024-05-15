import ButtonWizard from "./ButtonWizard";

const StepWizardChooseEmployee = (props) => {
  return (
    <>
      Pilihan Pegawai <hr></hr>
      <div>
        <h2>Step {props.currentStep}</h2>
        <p>Total Steps: {props.totalSteps}</p>
        <p>Is Active: {props.isActive}</p>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardChooseEmployee;
