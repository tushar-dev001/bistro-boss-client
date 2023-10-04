import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaCalendarAlt, FaCartPlus, FaHome, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { FiCalendar, FiMenu, FiShoppingBag } from "react-icons/fi";
import { AiOutlineContacts } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from '../hooks/useAdmin'

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin()



  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

<ul className="menu p-4 w-80 min-h-full text-black">
        {
          isAdmin
          ?
          <>
            {/* Sidebar content here */}
          <li className="uppercase">
            <NavLink to="/dashboard/userhome">
              <FaHome className="text-2xl" /> Admin Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/reservation">
              <FaUtensils className="text-2xl" /> Add Items
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/payment">
              <FaBars className="text-2xl" /> Manage Items
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/allusers">
              <FaUsers className="text-2xl" />
              All users
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/review">
              <FiCalendar className="text-2xl" /> Manage Bookings
            </NavLink>
          </li>
          </>
          :
          <>
            {/* Sidebar content here */}
          <li className="uppercase">
            <NavLink to="/dashboard/userhome">
              <FaHome className="text-2xl" /> User Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt className="text-2xl" /> reservation
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/payment">
              <FaWallet className="text-2xl" /> payment history
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/mycart">
              <FaCartPlus className="text-2xl" />
              My Cart
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/review">
              <MdReviews className="text-2xl" /> Add Review
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/booking">
              <FiCalendar className="text-2xl" /> My Booking
            </NavLink>
          </li>
          </>

        }

          




          <div className="divider"></div>
          <li className="uppercase">
            <NavLink to="/">
              {" "}
              <FaHome className="text-2xl" /> Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/menu">
              <FiMenu className="text-2xl" /> Menu
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/shop">
              {" "}
              <FiShoppingBag className="text-2xl" /> Shop
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/contact">
              {" "}
              <AiOutlineContacts className="text-2xl" /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
