const StepWizardChooseEmployee = (props) => {
  return (
    <>
      Wizard Employee <hr></hr>
      <div>
        <h2>Step {props.currentStep}</h2>
        <p>Total Steps: {props.totalSteps}</p>
        <p>Is Active: {props.isActive}</p>
        <p>
          <button onClick={props.previousStep}>Previous Step</button>
        </p>
        <p>
          <button onClick={props.nextStep}>Next Step</button>
        </p>
        <p>
          <button onClick={() => props.goToStep(2)}>Step 2</button>
        </p>
        <p>
          <button onClick={props.firstStep}>First Step</button>
        </p>
        <p>
          <button onClick={props.lastStep}>Last Step</button>
        </p>
      </div>
    </>
  );
};
export default StepWizardChooseEmployee;
