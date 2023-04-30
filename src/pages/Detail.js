import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Details.css";
import logo from "../images/baslik.png";

function Detail() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    console.log(id);
    axios.get(`https://swapi.dev/api/starships/${id}`).then((response) => {
      setStarship(response.data);
    });
  }, []);
  if (starship == null) {
    return <div></div>;
  }
  return (
    <div className="about">
      <Link to={`/`}>
        <div className="homeBack">Home page</div>
      </Link>
      <div className="containers">
        <div className="about-content ">
          <div className="about-img">
            <img src={logo} alt="cover" />
          </div>
        </div>
        <div className=" fw-7 fs-18 text-center">
          <span>{starship.name}</span>
        </div>

        <div className=" text-center">
          <div className=" author fs-15">
            <span className="text-capitalize fw-7">Model: </span>
            <span>{starship.model}</span>
          </div>
          <div className=" edition-count fs-15">
            <span className="text-capitalize fw-7">Passengers: </span>
            <span>{starship.passengers}</span>
          </div>
          <div className=" edition-count fs-15">
            <span className="text-capitalize fw-7">
              Max Atmosohering Speed:{" "}
            </span>
            <span>{starship.max_atmosphering_speed}</span>
          </div>
          <div className=" edition-count fs-15">
            <span className="text-capitalize fw-7">Manufacturer: </span>
            <span>{starship.manufacturer}</span>
          </div>
          <div className=" edition-count fs-15">
            <span className="text-capitalize fw-7">Spaceworks </span>
          </div>
          <div className="edition-count fs-15">
            <span className="text-capitalize fw-7">Crew: </span>
            <span>{starship.crew}</span>
          </div>
          <div className=" edition-count fs-15">
            <span className="text-capitalize fw-7">Cargo Capacity: </span>
            <span>{starship.cargo_capacity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
