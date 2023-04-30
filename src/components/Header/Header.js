import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex  text-center text-white">
          <h1 className="header-starwars">Star Wars</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
