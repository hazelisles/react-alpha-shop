import { FC, useState, useEffect, memo } from 'react';
import LineItem from './LineItem';
import './style.css';

type CartProps = {
  cartLineItems: Array,
};

const sumCartItem = (cart) => {
  return cart
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

const Cart: FC<CartProps> = memo((props) => {
  const { cartLineItems } = props;
  const [total, setTotal] = useState(sumCartItem(cartLineItems));
  useEffect(() => {
    setTotal(sumCartItem(cartLineItems));
  }, [cartLineItems]);

  return (
    <>
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list row">
        {cartLineItems.map((item) => {
          return (
            <LineItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.img}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </section>
      <hr />
      <section className="cart-info shipping">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <hr />
      <section className="cart-info total">
        <div className="text">小計</div>
        <div className="price">${total}</div>
      </section>
    </>
  );
});
export default Cart;
