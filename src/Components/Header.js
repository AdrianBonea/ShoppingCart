import React from "react";

export default function Header(props) {
  const { currency } = props;
  return (
    <header className="flex flex-row items-center">
      <div>
        <h1 className="text-4xl text-slate-500 mt-10 ml-10">Checkout Page</h1>
        <div className="border-t-4 border-sky-500 w-20 mt-3 ml-10"></div>
      </div>

      <form className="flex items-center ml-24 mt-10 ">
        <label forhtml="curency" className="mr-4 text-slate-500">
          Chose curency
        </label>
        <select name="curency" id="curency" className="border-none">
          {currency.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    </header>
  );
}
