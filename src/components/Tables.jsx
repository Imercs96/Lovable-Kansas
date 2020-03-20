import React from "react";
import { Link } from "react-router-dom";
// let random1 = Math.floor(Math.random() * 10) //va del 0 - 9
export default ({ products }) => {
  // console.log(products);
  return (
    <div
      style={{
        backgroundColor: "white",
        marginLeft: "250px"
      }}
    >
      <h1>Tables</h1>

      <div class="row row-cols-1 row-cols-md-3">
        <div
          className="card mb-3"
          style={{
            width: "400px",
            margin: "30px",
            padding: "0px",
            borderStyle: "none",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          <div className="row no-gutters">
            <div className="col-md-5">
              <img
                src="https://insideone.s3-sa-east-1.amazonaws.com/services-table-busy.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h6
                  className="font-weight-normal"
                  //   style={{
                  //     margin: "0px"
                  //   }}
                >
                  Libre
                </h6>
                <h3 className="font-weight-bold">Mesa 1</h3>

                <p
                  className="font-weight-normal"
                  style={{
                    margin: "0px"
                  }}
                >
                  <small class="text-muted">Mozo</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ width: "450px", margin: "30px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://insideone.s3-sa-east-1.amazonaws.com/services-table-free.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">Libre</p>
                <h5 className="card-title">Mesa 1</h5>

                <p className="card-text">
                  <small class="text-muted">Mozo</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ width: "450px", margin: "30px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://insideone.s3-sa-east-1.amazonaws.com/services-table-pay.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">Libre</p>
                <h5 className="card-title">Mesa 1</h5>

                <p className="card-text">
                  <small class="text-muted">Mozo</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ width: "450px", margin: "30px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://insideone.s3-sa-east-1.amazonaws.com/services-table-waiter.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">Libre</p>
                <h5 className="card-title">Mesa 1</h5>

                <p className="card-text">
                  <small class="text-muted">Mozo</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" style={{ width: "450px", margin: "30px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://insideone.s3-sa-east-1.amazonaws.com/services-table-order.png"
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">Libre</p>
                <h5 className="card-title">Mesa 1</h5>

                <p className="card-text">
                  <small class="text-muted">Mozo</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
