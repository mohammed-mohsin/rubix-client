import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import iconGoogle from "../../images/google.png";

import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "./Firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [setLoggedInUser] = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    success: false,
    isSignedIn: false,
  });

  const handleBlur = (e) => {
    const newUSerInfo = { ...user };
    if (e.target.name === "name") {
      newUSerInfo[e.target.name] = e.target.value;
    }
    if (e.target.name === "email") {
      newUSerInfo[e.target.name] = e.target.value;
    }
    if (e.target.name === "password") {
      newUSerInfo[e.target.name] = e.target.value;
    }

    setUser(newUSerInfo);
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setUser({ ...user, name: user.displayName });
        // console.log(user);
        setLoggedInUser({ ...user, name: user.displayName });
      } else {
        // No user is signed in.
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUSerInfo = { ...user, name: res.user.displayName };
          newUSerInfo.err = "";
          newUSerInfo.message = `${user.name} created Successfully`;
          newUSerInfo.success = true;
          setUser(newUSerInfo);
          setLoggedInUser(newUSerInfo);
          // console.log("user", user);
          // console.log("LoggedinUser", loggedInUser);
          history.replace(from);

          emailVerification(user.email);
          userInfoUpdate(user.name);

          firebase
            .auth()
            .user.sendEmailVerification()
            .then(function () {
              alert(`Confirm Your Email: ${user.email}`);
            })
            .catch(function (error) {
              // An error happened.
            });
        })
        .catch(function (error) {
          // Handle Errors here.

          var errorCode = error.code;
          var errorMessage = error.message;
          const newUSerInfo = { ...user };
          newUSerInfo.err = errorMessage;
          newUSerInfo.success = false;
          setUser(newUSerInfo);
        });
    }

    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUSerInfo = { ...user, name: res.user.displayName };
          // console.log("HI", newUSerInfo);
          newUSerInfo.err = "";
          newUSerInfo.message = `${user.name} loggedIn Successfully`;
          newUSerInfo.success = true;
          // console.log(newUSerInfo);
          setUser(newUSerInfo);
          setLoggedInUser(newUSerInfo);
          // console.log("user", user);
          // console.log("LoggedinUser", loggedInUser);
          history.replace(from);
          //

          // console.log("Loggedingggggg", loggedInUser)
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          const newUSerInfo = { ...user };
          newUSerInfo.err = errorMessage;
          newUSerInfo.success = false;
          setUser(newUSerInfo);
        });
    }

    setLoggedInUser(user);
  };

  // User Info Update
  const userInfoUpdate = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("UserName Update Successfully");
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  // email verification

  const emailVerification = (email) => {
    var user = firebase.auth().currentUser;

    user
      .sendEmailVerification()
      .then(function () {
        alert(`Please Verify youre email ${email}`);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  // Google Login

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var { displayName, email } = result.user;

        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // console.log("Google", signedInUser);

        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage);
        // ...
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="card">
              <h3>Create an account</h3>
              <div className="from-group">
                <form onSubmit={handleSubmit}>
                  <div className="form-group float-label-control label-bottom">
                    {!newUser && (
                      <input
                        onBlur={handleBlur}
                        required
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder=" Name"
                      />
                    )}

                    <br />
                    <input
                      onBlur={handleBlur}
                      required
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                    <br />
                    <input
                      onBlur={handleBlur}
                      required
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />

                    <br />
                    {!newUser && (
                      <input
                        onBlur={handleBlur}
                        required
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    )}
                    <br />
                    <br />
                    {!newUser ? (
                      <button
                        type="submit"
                        className="btn  btn-block btn-dark"
                        value="Create an account"
                      >
                        Create an account
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn  btn-block btn-dark"
                        value="Create an account"
                      >
                        Login
                      </button>
                    )}

                    <br />
                    <br />
                    <p style={{ color: "red", textAlign: "center" }}>
                      {user.err}
                    </p>

                    <p style={{ color: "green", textAlign: "center" }}>
                      {" "}
                      {user.message}
                    </p>
                    <div className="or "></div>
                  </div>
                </form>

                {!newUser ? (
                  <>
                    <p className="text-center">
                      Already Has an account?{" "}
                      <span
                        className="btn text-warning"
                        onClick={() => setNewUser(!newUser)}
                      >
                        Login
                      </span>
                    </p>
                  </>
                ) : (
                  <p className="text-center">
                    Don't have a account?{" "}
                    <span
                      className="btn text-warning "
                      onClick={() => setNewUser(!newUser)}
                    >
                      Sign Up
                    </span>
                  </p>
                )}
                <br />
                <br />
                <button
                  onClick={handleGoogleSignIn}
                  className="btn  btn-block btn-light"
                >
                  {" "}
                  <span>
                    {" "}
                    <img width="20" src={iconGoogle} alt="" />
                  </span>{" "}
                  Continue with Google{" "}
                </button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
