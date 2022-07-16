import './app.css';

const StepProgress = () => {
  return (
    <section className="checkout">
      <h2 className="checkout-title">結帳</h2>
      <section className="progress-container">
        <span className="num">1</span>
        <span>寄送地址</span>
        <span className="progress-bar" />
        <span className="num">2</span>
        <span>運送方式</span>
        <span className="progress-bar" />
        <span className="num">3</span>
        <span>付款資訊</span>
      </section>
    </section>
  );
};

export default StepProgress;
