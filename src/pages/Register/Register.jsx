import React, { useState } from "react";
import { Link } from "react-router";

function Register() {
  
  const handleRegister = (e) =>{
    e.preventDefault();
    
  }


  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center my-3">
            Register your account
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              {/* PhotoURL */}
              <label className="label">PhotoURL</label>
              <input type="text" className="input" placeholder="PhotoURL" />
              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div className="flex items-center ">
                <input type="checkbox" />{" "}
                <p className="ml-1">Accept Terms and Conditions</p>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="text-center mt-4">
                Dont’t Have An Account ?{" "}
                <Link className="text-red-900 font-bold" to="/auth">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
