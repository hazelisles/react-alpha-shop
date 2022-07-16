import './app.css';

const Cart = () => {
  return (
    <>
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list row">
        <div className="product-container col-12">
          <img
            className="img-container"
            src="./images/product-1.jpg"
            alt="product1"
          />
          <div className="product-info">
            <div className="d-flex flex-row justify-content-between">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="price">$3999</div>
            </div>
            <div className="product-control">
              <i className="fa-solid fa-circle-minus" />
              <span className="product-quantity">1</span>
              <i className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
        <div className="product-container">
          <img
            className="img-container"
            src="./images/product-2.jpg"
            alt="product2"
          />
          <div className="product-info">
            <div className="d-flex flex-row justify-content-between">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="price">$1299</div>
            </div>
            <div className="product-control">
              <i className="fa-solid fa-circle-minus" />
              <span className="product-quantity">1</span>
              <i className="fa-solid fa-circle-plus" />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="cart-info shipping">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <hr />
      <section className="cart-info total">
        <div className="text">小計</div>
        <div className="price">$5298</div>
      </section>
    </>
  );
};
export default Cart;
