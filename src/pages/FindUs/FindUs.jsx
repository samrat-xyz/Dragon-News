import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function FindUs() {
  return (
    <div className="join join-vertical w-full p-4 my-3 space-y-3 ">
      <h1 className="font-bold text-xl">Find Us</h1>
      <button className="btn join-item justify-start">
        {" "}
        <FaFacebook />
        Facebook
      </button>
      <button className="btn join-item justify-start">
        <FaTwitter />
        Twitter
      </button>
      <button className="btn join-item justify-start">
        <FaSquareInstagram />
        Instagram
      </button>
    </div>
  );
}

export default FindUs;
