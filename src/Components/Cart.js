import React from "react";

export default function Cart(props) {
  const { cartItems, setCartItems, onAdd, onRemove } = props;

  const [price, setPrice] = React.useState(0);

  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    setCartItems(arr);
    handlePrice();
  }; //remove from cart button

  const handlePrice = () => {
    let total = 0;
    cartItems.map((item) => (total += item.qty * item.price));
    setPrice(total);
  }; // calculate the total price

  React.useEffect(() => {
    handlePrice();
  }); //keep the prioce updated

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
              <button onClick={() => onAdd(item)}>+</button>
              <button>{item.qty}</button>
              <button onClick={() => onRemove(item)}>-</button>
            </div>
            <div> ${item.price} </div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
        {cartItems.length === 0 ? (
          <div></div>
        ) : (
          <div className="text-lg font-bold">
            <span>Total Price:</span>
            <span>{parseFloat(price).toFixed(2)}</span>
          </div>
        )}
      </div>
    </section>
  );
}
