const FoodCard = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="card rounded-none shadow-xl">
      <img className="max-w-full" src={image} alt="Shoes" />

      <div className="card-body ">
        <p className="bg-slate-900 text-white absolute right-0 mr-4 top-3 px-3 py-2 font-semibold font-[inter]">
          €{price}
        </p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="rounded-md btn  bg-[#E8E8E8] text-[#BB8506] border-0 border-b-2 border-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
