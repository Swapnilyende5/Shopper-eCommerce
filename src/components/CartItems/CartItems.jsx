import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { cart, removeFromCart, getSubTotal } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-mobile">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>size</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
      </div>
      {cart?.map((item, index) => {
        return (
          <div key={index}>
            <div className="cartitems-format cartitems-format-main">
              <img className="carticon-product-icon" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.size}</p>
              <p>${item.new_price}</p>
              <button className="cartitems-quantity">
                {item.quantity}
              </button>
              <p>${item.new_price * item.quantity}</p>
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => {
                  removeFromCart(item.id);
                }}
                alt=""
              />
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getSubTotal()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getSubTotal()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
