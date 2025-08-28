import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    // fetch cart item from local storage
    const storedcartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedcartItems);
  }, []);

  // calculate prices
  const calculateTotalprice = (item) => {
    return item.price * item.quantity;
  };

  // handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setcartItems([...cartItems]);

    // update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);
      updateLocalStorage([...cartItems]);
    }
  };

  // handle item remove
  const handleRemoveItem = (item) => {
    const updatecart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setcartItems(updatecart);
    updateLocalStorage(updatecart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalprice(item);
  }, 0);

  // order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title="Shop Cart" cartPage="Cart Page" />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>

                      <td className="cart-toprice">
                        ${calculateTotalprice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart top end */}

            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code..."
                  />
                  <input type="submit" value={"Apply Coupon"} />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <CheckOutPage/>
                </form>
              </div>
              {/* checkout box end*/}

              {/* shopping box */}

              <div className="shipping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakistan</option>
                          <option value="ind">Napal</option>
                          <option value="np">India</option>
                          <span className="select-icon">
                            <i className="icofont-rounded-down"></i>
                          </span>
                        </select>
                      </div>

                      <div className="outline-select shipping-select mt-2">
                        <select>
                          <option value="uk">New York (NY)</option>
                          <option value="bd">London</option>
                          <option value="pak">Dhaka</option>
                          <option value="ind">Japan</option>
                          <option value="np">America</option>
                          <span className="select-icon">
                            <i className="icofont-rounded-down"></i>
                          </span>
                        </select>
                      </div>
                      <input type="text" name="postalCode" id="postalCode" className="cart-page-input-text mt-2" placeholder="Postcode/ZIP"/>
                      <button type="submit" className="mt-2">Update Address</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                        <h3>Cart Totals</h3>
                        <ul className="lab-ul">
                              <li>
                                <span className="pull-left">Cart Subtotal</span>
                                <p className="pull-right">$ {cartSubtotal}</p>
                              </li>
                              <li>
                                <span className="pull-left">Shipping and Handling</span>
                                <p className="pull-right">Free Shipping</p>
                              </li>
                               <li>
                                <span className="pull-left">Order Total</span>
                                <p className="pull-right">${orderTotal.toFixed(2)}</p>
                              </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
