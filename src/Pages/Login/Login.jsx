import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: 'Login Successfully!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate(from,{replace: true})
    })
    .catch(error =>console.log(error))
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (

   <>
    <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center text-5xl font-bold">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Captcha</span>
                </label>
                <LoadCanvasTemplate />
                <input
                  type="captcha"
                  onBlur={handleValidateCaptcha}
                  name="Captcha"
                  placeholder="type the text above"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                {/* TODO: login button disabled */}
                <input
                  className="btn btn-primary"
                  disabled={false}
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="text-center">
                <p className="text-orange-500">
                  New here?{" "}
                  <span className=" font-bold">
                    <Link to="/register">Create a New Account</Link>
                  </span>
                </p>
                <p>Or sign in with</p>
                <div className="mt-4">
                  <SocialLogin></SocialLogin>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;
