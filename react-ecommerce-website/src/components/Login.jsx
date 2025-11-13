import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import {
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Login Now";

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const authContext = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    authContext
      .signIn(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login successful!");
        navigate(from, { replace: true }); 
      })
      .catch((error) => {
        console.error("Authentication error:", error);
        let message = "Please provide valid email and password!";
        if (error.code === "auth/user-not-found") {
          message = "No user found with this email!";
        } else if (error.code === "auth/wrong-password") {
          message = "Incorrect password!";
        } else if (error.code === "auth/invalid-credential") {
          message = "Email or password not correct!";
        }
        setErrorMessage(message);
      });
  };

const handleRegister = () => {
  authContext.googleSignIn()
    .then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.error("Google sign-in error:", error);
    });

    console.log(handleRegister)
};


  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
                required
              />
            </div>

            {/* showing message */}
            <div>
              {errorMessage && (
                <div className="error-message text-danger">{errorMessage}</div>
              )}
            </div>


            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" name="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <Link to="/forgetpass">Forget Password?</Link>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span>
              Don't Have an Account? <Link to="/sign-up">Sign Up</Link>
            </span>

            <div className="or">
              <span>or</span>
            </div>

            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <button
                  type="button"
                  onClick={handleRegister}
                  style={{
                    backgroundColor: "#f16126",
                    color: "#ffffffff",
                    width: "40px",
                    height: "40px",
                    border: "none",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <i className="icofont-github"></i>
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="twitter"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="instagram"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="icofont-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="linkedin"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="icofont-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pinterest"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="icofont-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
