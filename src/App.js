import Favorite from "./Components/Favorite";
import React from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import "flowbite";

export default function App() {
  const [product, setProduct] = React.useState([]);

  const [currency, setCurrency] = React.useState([]);

  React.useEffect(() => {
    fetch("http://private-32dcc-products72.apiary-mock.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error.message));
  }, []); //fetching data from the market api

  React.useEffect(() => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=d920d0358f4a15114fca19567c67dffb&symbols=USD,AUD,CAD,PLN,MXN&format=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrency([data.base, ...Object.keys(data.rates)]);
      })
      .catch((error) => console.log(error.message));
  }, []); //fetching data from the currency api

  console.log(currency);

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
      <Header currency={currency} />
      <div className="flex flex-row items-baseline">
        <div className="flex flex-col">
          {product
            .sort((a, b) => {
              return b.price - a.price;
            })
            .map((item) => (
              <Favorite
                onAdd={onAdd}
                product={item}
                key={item.id}
                currency={currency}
              />
            ))}
        </div>
        <div className="ml-20">
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            currency={currency}
          />
        </div>
      </div>
    </div>
  );
}
