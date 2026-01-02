import React from "react";
import "./Style/ProductCard.css";

const ProductCard = ({image="public/vite.svg",name="jkasbdjkbad",description="distinctio totam dolor unde numquam optio. Cupiditate molestiae officiis repellat quaerat minima quisquam illum quod facilis sunt.",rating=5,actualPrice=5000,discountPercent=30}) => {
  const discountedPrice = actualPrice - (actualPrice * discountPercent) / 100;

  return (
    <div className="product-card">

      <div className="discount-badge">
        {discountPercent}% OFF
      </div>

      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{description}</p>

        <div className="ratings">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? "star filled" : "star"}
            >
              ★
            </span>
          ))}
        </div>


        <div className="price">
          <span className="discounted-price">₹{discountedPrice}</span>
          <span className="actual-price">₹{actualPrice}</span>
        </div>


        <button className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
