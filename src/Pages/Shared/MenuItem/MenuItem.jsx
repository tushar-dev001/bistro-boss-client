const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  // console.log(item);
  return (
    <div className=" mt-4">
      <div className="flex gap-x-3">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src={image}
          alt=""
        />

        <div>
          <h3 className="uppercase text-xl">{name}--------</h3>
          <p className="">{recipe}</p>
        </div>
      </div>
      <div className="ml-28">
      <p className="text-orange-600 ">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
