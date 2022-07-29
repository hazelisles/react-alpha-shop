import { FC, memo } from 'react';
import style from './ProgressControl.module.scss';

type ProgressControlProps = {
  step: number,
  setStep: React.SetStateAction<Number>,
};

const ProgressControl: FC<ProgressControlProps> = memo((props) => {
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
    <section className={style.buttonGroup} data-step1={step === 1}>
      <button className={style.prev} disabled={step === 1} onClick={atPrev}>
        上一步
      </button>
      <button className={style.next} disabled={step === 3} onClick={atNext}>
        下一步
      </button>
      <button className={style.next} disabled={step !== 3}>
        確認下單
      </button>
    </section>
  );
});
export default ProgressControl;
