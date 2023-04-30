import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchForm.css";

const SearchForm = ({ search }) => {
  const [searchInp, setSearchInp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchInp);
  };
  const onChange = (e) => {
    setSearchInp(e.target.value);
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                onChange={onChange}
                type="text"
                className="form-control"
                placeholder="Name/Model"
              />
              <button type="submit" className="flex flex-c">
                <FaSearch size={22} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
