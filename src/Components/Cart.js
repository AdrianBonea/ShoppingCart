export default function Cart() {
  return (
    <section className="min-w-[450px] min-h-[260px] w-auto border bg-slate-100/70 shadow-inner p-5">
      <h1 className=" text-2xl">Products in your shopping cart</h1>
      <div className="flex flex-row mt-5 border-b">
        <p className="basis-1/2">Product</p>
        <p className="basis-1/4">Quantity</p>
        <p className="basis-1/4 ml-4 flex justify-end">Value</p>
      </div>
      <ol>
        <li className="flex border-b-4 border-black py-4">
          <p className="basis-1/2">Product Name</p>
          <p className="basis-1/4">x</p>
          <p className="basis-1/4 ml-4 flex justify-end"> $120</p>
        </li>
      </ol>
      <div className="flex justify-end">Total: $120</div>
    </section>
  );
}
