import { BsCart2 } from "react-icons/bs";

export default function Favorite(props) {
  const { product, onAdd, currency } = props;
  return (
    <section className="ml-10 mt-5">
      <div id="favorite">
        <ol className="flex flex-col">
          <li className="flex flex-row shadow-lg w-[60vh] h-20 items-center font-bold">
            <div className="w-40 pl-2">{product.name}</div>
            <div className="ml-20 w-40">
              Price: <span className="text-sky-600">${product.price}</span>
            </div>
            <button
              onClick={() => onAdd(product)}
              type="button"
              className="ml-4 flex flex-row items-center bg-green-500 p-2 rounded hover:bg-green-400 
                      text-white font-bold"
            >
              <BsCart2 className="mr-2" />
              Add to cart
            </button>
          </li>
        </ol>
      </div>
    </section>
  );
}
