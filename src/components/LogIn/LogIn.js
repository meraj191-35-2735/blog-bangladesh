import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import googleSignIn from "../../images/google.png";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (gUser) {
    navigate("/");
  }
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center w-1/2 lg:ml-5 lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            To Take any action, you have to create a account or login to the
            website.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-3">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="form-control mt-2">
              <button class="btn btn-primary">Create Account</button>
            </div>
            <div class="divider">OR</div>
            <img
              onClick={() => signInWithGoogle()}
              src={googleSignIn}
              alt=""
              className="btn btn-link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
