import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Energistia an deliver atactica metrcs after adsionary Apropia trnsition enterpris an sources applications emerging psd template.";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select color");

  // ✅ Popup message state
  const [message, setMessage] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setQuantity(1);
    setSize("Select Size");
    setColor("Select color");
    setCoupon("");

    // ✅ Show success popup here
    setMessage("✅ Your product has been added to the cart!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      {/* ✅ Global Popup */}
      {message && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#ffffff",
            color: "#16a34a", // green text
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            zIndex: 9999,
            fontWeight: "600",
            fontSize: "15px",
            border: "2px solid #f16126", // green border
            display: "flex",
            alignItems: "center",
            gap: "10px",
            minWidth: "280px",
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "20px" }}>🛒</span>
          {message}
        </div>
      )}

      {/* Product Info */}
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          {ratingsCount} review
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* Cart Components */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* Size Select */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option value="SM">SM</option>
              <option value="MO">MO</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* Color Select */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select color</option>
              <option value="Pink">Pink</option>
              <option value="Ash">Ash</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* Quantity Control */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              type="text"
              className="cart-plus-minus-box"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              readOnly
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* Coupon Input */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
