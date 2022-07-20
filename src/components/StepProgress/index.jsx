import React from 'react';
import './app.css';
import cx from 'classnames';

type StepProgressProps = {
  step: Number,
};

const StepProgress: React.FC<StepProgressProps> = (props) => {
  const { step } = props;
  const doneEmoji = '✔️';
  return (
    <section className="checkout">
      <h2 className="checkout-title">結帳</h2>
      <div className="progress-container">
        <div className="step">
          <div className={cx('number', ' active', { done: step !== 1 })}>
            {step !== 1 ? doneEmoji : 1}
          </div>
          <span>寄送地址</span>
          <div className="progress-bar active" />
        </div>
        <div className="step">
          <div
            className={cx(
              'number',
              { active: step !== 1 },
              { done: step === 3 },
            )}
          >
            {step === 3 ? doneEmoji : 2}
          </div>
          <span>運送方式</span>
          <div className={cx('progress-bar', { active: step !== 1 })} />
        </div>
        <div className="step">
          <div className={cx('number', { active: step === 3 })}>3</div>
          <span>付款資訊</span>
        </div>
      </div>
    </section>
  );
};

export default StepProgress;
