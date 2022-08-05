const LineItem = (props) => {
  const { id, name, price, image, quantity, onUpdateQuantity } = props;
  return (
    <div className="product-container col-12">
      <img className="img-container" src={image} alt={id} />
      <div className="product-info">
        <div className="d-flex flex-row justify-content-between">
          <div className="product-name">{name}</div>
          <div className="price">${price}</div>
        </div>
        <div className="product-control">
          <button onClick={(e) => onUpdateQuantity(e, id)}>
            <i className="fa-solid fa-circle-minus" />
          </button>

          <span className="product-quantity">{quantity}</span>
          <button onClick={(e) => onUpdateQuantity(e, id)}>
            <i className="fa-solid fa-circle-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LineItem;
