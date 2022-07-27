import React from 'react';
import style from './App.module.scss';
import StepConstants from '../../constants/StepConstants';

type ProgressControlProps = {
  step: number,
  setStep: React.SetStateAction<Number>,
};

const ProgressControl: React.FC<ProgressControlProps> = (props) => {
  const { step, setStep } = props;

  const atNext = () => {
    if (step === StepConstants.STEP_THREE) return;
    setStep(step + 1);
  };
  const atPrev = () => {
    if (step === StepConstants.STEP_ONE) return;
    setStep(step - 1);
  };

  return (
    <section
      className={style.buttonGroup}
      data-step1={step === StepConstants.STEP_ONE}
    >
      <button
        className={style.prev}
        disabled={step === StepConstants.STEP_ONE}
        onClick={atPrev}
      >
        上一步
      </button>
      <button
        className={style.next}
        disabled={step === StepConstants.STEP_THREE}
        onClick={atNext}
      >
        下一步
      </button>
      <button
        className={style.next}
        disabled={step !== StepConstants.STEP_THREE}
      >
        確認下單
      </button>
    </section>
  );
};
export default ProgressControl;
