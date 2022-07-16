import './app.css';

const Step2 = () => {
  return (
    <>
      <h3 className="form-title">運送方式</h3>
      <section className="container mb-5">
        <label className="radio-group">
          <input id="shipping-standard" type="radio" name="shipping" checked />
          <div className="radio-info">
            <div className="d-flex flex-row justify-content-between">
              <div className="text">標準運送</div>
              <div className="price">免費</div>
            </div>
            <div className="period">約 3~7 個工作天</div>
          </div>
          <div className="radio-btn" />
        </label>
        <label className="radio-group">
          <input id="shipping-dhl" type="radio" name="shipping" />
          <div className="radio-info">
            <div className="d-flex flex-row justify-content-between">
              <div className="text">DHL 貨運</div>
              <div className="price">$500</div>
            </div>
            <div className="period col col-12">48 小時內送達</div>
          </div>
          <div className="radio-btn" />
        </label>
      </section>
    </>
  );
};

export default Step2;
