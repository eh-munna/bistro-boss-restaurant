const MenuItem = ({ item }) => {
  const { name, price, recipe, image } = item;

  return (
    <div className="flex gap-3 mb-4">
      <img
        className="w-20 h-16 rounded-t-0 rounded-r-[200px] rounded-b-[200px]"
        src={image}
        alt=""
      />
      <div className="space-y-3">
        <h3 className="uppercase text-[#151515] text-xl">{name} --- </h3>
        <h4 className="">{recipe}</h4>
      </div>
      <p className="text-[#BB8506]">{price}</p>
    </div>
  );
};

export default MenuItem;
