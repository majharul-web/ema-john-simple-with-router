import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storeCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          addedProduct.quantity = savedCart[key];
          storeCart.push(addedProduct);
        }
      }
      setCart(storeCart);
    }
  }, [products]);

  return [cart, setCart];
};
export default useCart;
