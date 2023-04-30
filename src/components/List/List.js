import React from "react";

import "./Card.css";
import Card from "../List/Card";

const List = ({ starships }) => {
  if (starships == null) {
    return <div></div>;
  }

  return (
    <div>
      <section className="cardlist">
        <div className="container">
          <div className="cardlist-content grid">
            {starships.map((i, index) => {
              return (
                <Card
                  key={index}
                  name={i.name}
                  model={i.model}
                  hyperdrive_rating={i.hyperdrive_rating}
                  url={i.url}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default List;
