const LineItem = (props) => {
  const { id, name, price, image, quantity } = props;
  return (
    <div className="product-container col-12">
      <img className="img-container" src={image} alt={id} />
      <div className="product-info">
        <div className="d-flex flex-row justify-content-between">
          <div className="product-name">{name}</div>
          <div className="price">${price}</div>
        </div>
        <div className="product-control">
          <i className="fa-solid fa-circle-minus" />
          <span className="product-quantity">{quantity}</span>
          <i className="fa-solid fa-circle-plus" />
        </div>
      </div>
    </div>
  );
};

export default LineItem;
