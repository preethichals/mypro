import React from 'react'

export default function ContainerProd({item}) {
          
  return (
    <div className="polaroid px-2 rounded m-4 flex">
      <img
        className="pt-3"
        src={item.url}
        alt="5 Terre"
        style={{ width: "100%" }}
      />
      <div className="d-flex justify-content-around p-2 bg-white align-items-center">
        <img
          src={item.logo1}
          style={{ width: "4rem", height: "3rem" }}
          alt="logo1"
        />

        <img
          className="mx-1"
          src={item.logo2}
          style={{ width: "4rem", height: "3rem" }}
          alt="logo1"
        />
        <img
          src={item.logo3}
          style={{ width: "4rem", height: "3rem" }}
          alt="logo1"
        />
      </div>
      <div className="deal lh-1">
              <p className="fw-semibold fs-3">{item.name}</p>
        <p className="d-flex justify-content-center fs-5">
          <span className="text-decoration-line-through mr-2 ">
            {" "}
            <sup>₹</sup>​{item.oldPrice}
          </span>
          <span className="fw-semibold">
            {" "}
            <sup>₹</sup>{item.newPrice}
          </span>
        </p>
      </div>
    </div>
  );
}
