import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loader from "../Loader/Loader";
import { Link, useNavigate, useLocation } from "react-router-dom";
import googleSignIn from "../../images/google.png";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (gUser || user) {
      navigate(from, { replace: true });
    }
  }, [gUser, user, from, navigate]);

  if (error || gError) {
    signInError = (
      <p className="text-red-600 pb-2">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  if (loading || gLoading) {
    return <Loader></Loader>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-gray-200 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email field  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a Valid Email Address",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* Password Field  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character or more longer",
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Error  */}
            {signInError}
            {/* Login Button  */}
            <input
              className="btn btn-active btn-primary text-white font-bold w-full max-w-xs"
              type="submit"
              value="Login"
            />
          </form>

          <p className="text-center">
            New to BlogBD?{" "}
            <Link className="text-secondary font-bold" to="/signup">
              Create Account
            </Link>
          </p>

          <div className="divider">OR</div>
          <img
            onClick={() => signInWithGoogle()}
            src={googleSignIn}
            alt=""
            className="btn btn-link"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
