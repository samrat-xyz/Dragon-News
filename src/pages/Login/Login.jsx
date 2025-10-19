import React from "react";
import { Link } from "react-router";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center my-3">
            Login your account
          </h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center mt-4">
              Dont’t Have An Account ? <Link className="text-red-900 font-bold" to="/auth/register">Register</Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Login;
