import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import {
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

const title = "Sign Up";
const socialTitle = "Sign Up With Social Media";
const btnText = "Register Now";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const authContext = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;


    authContext
      .createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("Registration successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Signup error:", error);
        let message = "Please provide valid information!";

        if (error.code === "auth/email-already-in-use") {
          message = "This email is already in use!";
        }
        setErrorMessage(message);
      });
  };

  const handleGoogleSignUp = () => {
    authContext.googleSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google sign-up error:", error);
      });
  };

  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>

          <form className="account-form" onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name *"
                required
              />
            </div>

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

            {errorMessage && (
              <div className="error-message text-danger">{errorMessage}</div>
            )}

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-bottom">
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>

            <div className="or">
              <span>or</span>
            </div>

            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <button
                  onClick={handleGoogleSignUp}
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
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
