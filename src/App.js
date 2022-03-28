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
  console.log(product);

  // const [quantity, setQuantity] = React.useState({
  //   quantity: "0",
  // });

  // function handleChange(e) {
  //   const { number, value } = e.target.value;
  //   setQuantity((prevQuantity) => ({
  //     ...prevQuantity,
  //     [number]: value,
  //   }));
  // }

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
              <Favorite key={item.id} {...item} />
            ))}
        </div>
        <div className="ml-20">
          <Cart />
        </div>
      </div>
    </div>
  );
}
