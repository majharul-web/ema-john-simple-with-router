import React from "react";
import { useHistory } from "react-router";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products] = useProduct();
  const [cart, setCart] = useCart(products);
  const history=useHistory();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handleShipping=()=>{
    
    /* setCart([]);
    clearTheCart(); */
    history.push('/shipping');
  }
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {cart.map((product) => (
          <ReviewItem product={product} key={product.key} handleRemove={handleRemove}></ReviewItem>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}>
          
            <button onClick={handleShipping} className='btn-regular'>Process shipping</button>
         
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
