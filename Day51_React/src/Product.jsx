import React, { useState } from "react";

const Product = ({ product }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {product.map((p) => (
            <div key={p.id} className="col-md-4 col-lg-4 my-3 ">
              <div className="col-md-4">
                <div
                  className="card bg-dark text-center"
                  style={{ width: "18rem" }}
                >
                  <div className=" d-flex justify-content-center align-items-center p-3">
                    <img
                      src={p.imgSrc}
                      class="card-img-top"
                      alt="..."
                      style={{ width: "120px" }}
                    ></img>
                  </div>
                  <div className="card-body bg-dark text-light">
                    <h5 className="card-title">{p.title}Card title</h5>
                    <p className="card-text">{p.description}</p>
                    <a href="#" className="btn btn-danger mx-4">
                      {p.price}
                    </a>
                    <a href="#" className="btn btn-warning">
                      add top cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
