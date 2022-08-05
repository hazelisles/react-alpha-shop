import { FC, useState, useEffect, memo, useCallback } from 'react';
import { useCartContext } from '../Contexts/CartContext';
import LineItem from './LineItem';
import './style.css';

type CartProps = {
  cartLineItems: Array,
};

const sumCartItem = (cart) => {
  return cart.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);
};

const Cart: FC<CartProps> = memo(() => {
  const { step, cartLineItems, setCartLineItems } = useCartContext();
  const [total, setTotal] = useState(sumCartItem(cartLineItems));
  useEffect(() => {
    setTotal(sumCartItem(cartLineItems));
  }, [cartLineItems]);

  const atUpdateQuantity = useCallback(
    (e, id) => {
      setCartLineItems((prev) => {
        if (e.target.classList.contains('fa-circle-plus')) {
          return prev.map((item) => {
            if (item.id === id && item.quantity < 20) {
              return {
                id: item.id,
                name: item.name,
                img: item.img,
                price: item.price,
                quantity: item.quantity + 1,
              };
            }
            return item;
          });
        }
        if (e.target.classList.contains('fa-circle-minus')) {
          return prev.map((item) => {
            if (item.id === id && item.quantity > 1) {
              return {
                id: item.id,
                name: item.name,
                img: item.img,
                price: item.price,
                quantity: item.quantity - 1,
              };
            }
            return item;
          });
        }
        return prev;
      });
    },
    [setCartLineItems],
  );

  return (
    <>
      <section className="d-flex justify-content-between">
        <h3 className="cart-title">購物籃</h3>
        <div className="text-primary">Current Step: {step}</div>
      </section>

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
              onUpdateQuantity={atUpdateQuantity}
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
