import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="my-20">
      {title && (
        <Cover
          img={img}
          title={title}
          subTitle="Would you like to try a dish?"
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-5 mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="uppercase btn btn-outline mt-5 text-white border-0 border-b-4 border-b-black hover:bg-black hover:text-white">
          Order your favorite food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
