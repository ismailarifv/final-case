import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import logo from "../../images/baslik.png";

const Card = ({ name, model, hyperdrive_rating, url }) => {
  function getIdFromUrl() {
    return url.split("/")[5];
  }
  return (
    <div>
      <Link to={`/${getIdFromUrl()}`}>
        <div className="card-item flex flex-column flex-sb">
          <div className="card-item-img">
            <img src={logo} alt="cover" />
          </div>

          <div className="card-item-info-item title fw-7 fs-18 text-black text-center">
            <span>{name}</span>
          </div>

          <div className="card-item-info text-center">
            <div className="card-item-info-item author fs-15">
              <span className="text-capitalize fw-7">Model: </span>
              <span>{model}</span>
            </div>
            <div className="card-item-info-item edition-count fs-15">
              <span className="text-capitalize fw-7">Hyperdrive Rating: </span>
              <span>{hyperdrive_rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
