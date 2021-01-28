import React, { useContext } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebase from "firebase";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleSignOut = () => {
    // Sign Out
    firebase
      .auth()
      .signOut()
      .then(function () {
        const signedOutUser = {};
        setLoggedInUser(signedOutUser);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand " href="#">
            <img src="https://i.imgur.com/KkzHaih.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/products"
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/products" className="dropdown-item" href="#">
                    Chair
                  </Link>
                  <Link to="/products" className="dropdown-item" href="#">
                    Decor Art
                  </Link>
                  <Link to="/products" className="dropdown-item" href="#">
                    Furniture
                  </Link>
                  <Link to="/products" className="dropdown-item" href="#">
                    Lighting Lamp
                  </Link>
                  <Link to="/products" className="dropdown-item" href="#">
                    Sofa
                  </Link>
                </div>
              </li>
              <li className="nav-item ">
                <Link to="/products" className="nav-link" href="#">
                  Products <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>

            {loggedInUser.email ? (
              <>
                {loggedInUser.name}
                <button
                  onClick={handleSignOut}
                  className="btn btn-link text-dark text-decoration-none "
                  variant="warning"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link className="text-decoration-none" to="/login">
                <button
                  type="button"
                  className="btn btn-link text-dark text-decoration-none"
                >
                  <UserOutlined /> Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
