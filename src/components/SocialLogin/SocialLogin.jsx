import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleGoogle =()=>{
        googleSignIn()
        .then((result)=>{
            const loggedUser = result.user

            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
          console.log(saveUser);
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers:{
              'content-type' : 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
                setTimeout(() => {
                    navigate(from,{replace: true})
                }, 3000);
            });


            
            console.log(loggedUser);
        })

    }

  return (
    <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogle} className="btn btn-circle">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
