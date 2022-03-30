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
  }, []);

  const [cartItems, setCartItems] = React.useState([]);

  const handleClick = (item) => {
    if (cartItems.indexOf(item) !== -1) return;
    setCartItems([...cartItems, item]);
  };

  const handleChange = (item, numberAmount) => {
    const index = cartItems.indexOf(item);
    cartItems[index].amount = 1;
    cartItems[index].amount += numberAmount;

    if (cartItems[index].amount === 0) cartItems[index].amount = 1;

    setCartItems([...cartItems]);

    console.log(cartItems);
  };

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
              <Favorite
                handleClick={handleClick}
                product={item}
                key={item.id}
              />
            ))}
        </div>
        <div className="ml-20">
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
