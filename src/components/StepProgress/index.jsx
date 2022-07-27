import { FC, useEffect, useState } from 'react';
import cx from 'classnames';
import style from './App.module.scss';
import StepConstants from '../../constants/StepConstants';

type StepProgressProps = {
  step: Number,
};

const StepProgress: FC<StepProgressProps> = (props) => {
  const { step } = props;
  const doneEmoji = '✔️';
  const [isStep1, setStep1] = useState(true);
  const [isStep3, setStep3] = useState(false);
  useEffect(() => {
    switch (step) {
      case StepConstants.STEP_ONE:
        setStep1(true);
        setStep3(false);
        break;
      case StepConstants.STEP_TWO:
        setStep1(false);
        setStep3(false);
        break;
      case StepConstants.STEP_THREE:
        setStep1(false);
        setStep3(true);
        break;
      default:
        break;
    }
  }, [step]);
  return (
    <section className={style.checkout}>
      <h2 className={style.checkoutTitle}>結帳</h2>
      <div className={style.progressContainer}>
        <div className={style.step}>
          <div className={cx(style.number, 'active', { done: !isStep1 })}>
            {!isStep1 ? doneEmoji : StepConstants.STEP_ONE}
          </div>
          <span>寄送地址</span>
          <div className={cx(style.progressBar, 'active')} />
        </div>
        <div className={style.step}>
          <div
            className={cx(
              style.number,
              { active: !isStep1 },
              { done: isStep3 },
            )}
          >
            {isStep3 ? doneEmoji : StepConstants.STEP_TWO}
          </div>
          <span>運送方式</span>
          <div className={cx(style.progressBar, { active: !isStep1 })} />
        </div>
        <div className={style.step}>
          <div className={cx(style.number, { active: isStep3 })}>3</div>
          <span>付款資訊</span>
        </div>
      </div>
    </section>
  );
};

export default StepProgress;
