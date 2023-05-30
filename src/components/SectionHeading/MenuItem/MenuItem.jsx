const MenuItem = ({ item }) => {
  const { name, price, recipe, image } = item;

  return (
    <div className="flex gap-4 mb-4 items-center justify-center">
      <img
        className="w-20 h-16 rounded-t-0 rounded-r-[200px] rounded-b-[200px]"
        src={image}
        alt=""
      />
      <div className="flex flex-1 justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="uppercase text-[#151515] text-xl">{name} --- </h3>
          <h4 className="">{recipe}</h4>
        </div>
        <div>
          <p className="text-[#BB8506]">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
