import React from "react";

export default function Cart(props) {
  const { cartItems, setCartItems, handleChange } = props;

  const [price, setPrice] = React.useState(0);

  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    setCartItems(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let total = 0;
    cartItems.map((item) => (total += item.amount * item.price));
    setPrice(total);
  };

  React.useEffect(() => {
    handlePrice();
  });

  return (
    <section className="min-w-[450px] min-h-[260px] w-auto border bg-slate-100/70 shadow-inner p-5">
      <div>
        {cartItems.length === 0 && (
          <div className="text-lg font-bold">
            No products in your shopping cart
          </div>
        )}
      </div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-row">
            <div>{item.name}</div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div> ${item.price} </div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
        {cartItems.length === 0 ? (
          <div></div>
        ) : (
          <div className="text-lg font-bold">
            <span>Total Price of your Cart </span>
            <span>{price}</span>
          </div>
        )}
      </div>
    </section>
  );
}
