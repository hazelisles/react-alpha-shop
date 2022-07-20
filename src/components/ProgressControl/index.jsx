import React from 'react';
import './app.css';
import cx from 'classnames';

type ProgressControlProps = {
  step: number,
  setStep: Function,
};

const ProgressControl: React.FC<ProgressControlProps> = (props) => {
  const { step, setStep } = props;

  const atNext = () => {
    if (step === 3) return;
    setStep(step + 1);
  };
  const atPrev = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  return (
    <section className={cx('buttonGroup', { firstStep: step === 1 })}>
      <button className="prev" disabled={step === 1} onClick={atPrev}>
        上一步
      </button>
      <button className="next" disabled={step === 3} onClick={atNext}>
        下一步
      </button>
      <button className="next" disabled={step !== 3}>
        確認下單
      </button>
    </section>
  );
};
export default ProgressControl;
