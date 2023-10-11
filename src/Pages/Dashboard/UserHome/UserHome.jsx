import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const {user} = useAuth()
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | User Home</title>
      </Helmet>
      <div>
        <h2 className="text-3xl">Welcome back, {user.displayName}</h2>
      </div>
      <h3 className="text-3xl">Regular user Home</h3>
    </div>
  );
};

export default UserHome;
