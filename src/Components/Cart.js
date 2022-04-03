import React from "react";
import { AiFillDelete, AiOutlineQuestionCircle } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Cart(props) {
  const { cartItems, setCartItems, onAdd, onRemove, currency } = props;

  const [price, setPrice] = React.useState(0);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    handlePrice();
  }; // remove item from cart

  const handlePrice = () => {
    let total = 0;
    cartItems.map((item) => (total += item.qty * item.price));
    setPrice(total);
  }; // calculate the total price

  React.useEffect(() => {
    handlePrice();
  }); //keep the prioce updated

  return (
    <section className="min-w-[450px] min-h-[260px] w-auto border bg-slate-100/70 shadow-inner p-5 text-black/70">
      <div>
        {cartItems.length === 0 ? (
          <div className="text-lg font-bold">
            No products in your shopping cart
          </div>
        ) : (
          <div>
            <div className="text-lg font-bold">
              Products in your shopping cart
            </div>
            <div className="flex flex-row border-b mt-4 text-sm">
              <p className="basis-2/4">Product</p>
              <p className="basis-1/4">Quantity</p>
              <p className="basis-1/4 flex justify-end">Value</p>
            </div>
          </div>
        )}
      </div>

      <div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row mt-2 font-bold text-black/70"
          >
            <div className="basis-2/4 flex flex-row items-center">
              <div>{item.name}</div>
              {item.description === undefined ? (
                <Tippy content="No description" placement="right">
                  <button className="rounded-full ml-1 text-gray-400">
                    <AiOutlineQuestionCircle />
                  </button>
                </Tippy>
              ) : (
                <Tippy content={item.description} placement="right">
                  <button className="rounded-full ml-1 text-gray-400">
                    <AiOutlineQuestionCircle />
                  </button>
                </Tippy>
              )}
            </div>

            <div className="basis-1/4 flex items-center">
              <button
                onClick={() => onAdd(item)}
                className="font-bold hover:text-green-500"
              >
                +
              </button>
              <button className="font-bold ml-2">{item.qty}</button>
              <button
                onClick={() => onRemove(item)}
                className="font-bold ml-2 hover:text-red-500"
              >
                -
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="font-bold ml-2 hover:text-red-500"
              >
                <AiFillDelete />
              </button>
            </div>
            <div className="basis-1/4 flex justify-end">
              {" "}
              ${parseFloat(item.price * item.qty).toFixed(2)}{" "}
            </div>
          </div>
        ))}
        {cartItems.length === 0 ? (
          <div></div>
        ) : (
          <div className="flex justify-end text-lg font-bold border-t-2 border-t-black mt-4 pb-3 pt-2">
            <span>Total Price:</span>
            <span>&nbsp;${parseFloat(price).toFixed(2)}</span>
          </div>
        )}
      </div>
    </section>
  );
}
