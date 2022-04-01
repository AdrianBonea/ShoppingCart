import Favorite from "./Components/Favorite";
import React from "react";
import Cart from "./Components/Cart";

export default function App() {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    fetch("http://private-32dcc-products72.apiary-mock.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error.message));
  }, []); //fetching data from the api

  const [cartItems, setCartItems] = React.useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }; //add items to the cart and update the quantity for +

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  }; //remove the item from the cart and update the quantity for -

  return (
    <div>
      <h1 className="text-4xl text-slate-500 mt-10 ml-10">Checkout Page</h1>
      <div className="border-t-4 border-sky-500 w-20 mt-3 ml-10"></div>
      <div className="flex flex-row items-baseline">
        <div className="flex flex-col">
          {product
            .sort((a, b) => {
              return b.price - a.price;
            })
            .map((item) => (
              <Favorite onAdd={onAdd} product={item} key={item.id} />
            ))}
        </div>
        <div className="ml-20">
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </div>
      </div>
    </div>
  );
}
