import React from "react";

const CardMenuMovie = () => {
  return (
    <div className="card lg:card-side bg-base-100 bg-neutral-950 rounded-lg shadow-xl flex w-full">
      <div className="card-body w-1/2 py-5 ps-5">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
      <figure className="w-1/2 h-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
          className="object-cover h-full w-full rounded-xl"
        />
      </figure>
    </div>
  );
};

export default CardMenuMovie;
