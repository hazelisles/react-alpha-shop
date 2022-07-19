const Step3 = () => {
  return (
    <>
      <h3 className="form-title">付款資訊</h3>
      <section className="container mb-5">
        <div className="row my-4">
          <div className="col-md-8 col-12">
            <div className="form-label">持卡人姓名</div>
            <input
              className="form-control"
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="form-label">卡號</div>
            <input
              className="form-control"
              type="text"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-6 col-10">
            <div className="input-label">有效期限</div>
            <input className="form-control" type="text" placeholder="MM/YY" />
          </div>
          <div className="col-md-6 col-10">
            <div className="input-label">CVC / CCV</div>
            <input className="form-control" type="text" placeholder="123" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Step3;
