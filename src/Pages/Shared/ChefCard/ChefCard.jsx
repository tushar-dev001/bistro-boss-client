

const ChefCard = ({item}) => {
  const { name, recipe, image, price } = item;
  console.log(item);


  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
          <p className="bg-slate-900 text-white absolute top-16 right-16 px-3">${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
          <button className="uppercase btn btn-outline mt-5  text-white border-0 border-b-4 border-b-black hover:bg-black hover:text-white">
          Add to card
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
