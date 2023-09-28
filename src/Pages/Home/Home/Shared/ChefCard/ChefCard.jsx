import salad from  '../../../../../assets/category/slide1.jpg'

const ChefCard = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={salad}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase hover:bg-black hover:text-orange-500">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
