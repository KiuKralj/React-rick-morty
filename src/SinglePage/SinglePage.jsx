import "./SinglePage.css";
import React from "react";

const SinglePage = ({ clickedChar, setClickedChar }) => {
  const goBack = () => {
    setClickedChar(null);
  };

  return (
    <div className="single-page">
      <button onClick={goBack} className="go-back-button">
        Go Back
      </button>
      <div className="wrapper">
        <div>
          <img src={clickedChar.image} alt="character" />
        </div>
        <div className="details">
          <h2>Name: {clickedChar.name}</h2>
          <h3>Species: {clickedChar.species}</h3>
          <h3>Gender: {clickedChar.gender}</h3>
          <h3>Status: {clickedChar.status}</h3>
          <h3>Location: {clickedChar.location.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
