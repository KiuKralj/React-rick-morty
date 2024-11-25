import React from "react";
import "./HomePage.css";

const HomePage = ({
  characters,
  setClickedChar,
  prevPage,
  nextPage,
  page,
  setPage,
}) => {
  return (
    <>
      <div className="pagination">
        <button onClick={() => prevPage()} disabled={page === 1}>
          Prev
        </button>
        <div className="page-numbers">
          {page > 2 && (
            <span className="number" onClick={() => setPage(page - 2)}>
              {page - 2}
            </span>
          )}
          {page > 1 && (
            <span className="number" onClick={() => setPage(page - 1)}>
              {page - 1}
            </span>
          )}
          <p className="page-number">{page}</p>

          {page < 42 && (
            <span className="number" onClick={() => setPage(page + 1)}>
              {page + 1}
            </span>
          )}
          {page < 41 && (
            <span className="number" onClick={() => setPage(page + 2)}>
              {page + 2}
            </span>
          )}
        </div>
        <button onClick={() => nextPage()} disabled={page === 42}>
          Next
        </button>
      </div>
      <div className="cards-wrapper">
        {characters.map((char) => (
          <div
            key={char.id}
            className="card"
            onClick={() => setClickedChar(char)}
          >
            <img src={char.image} />
            <h3>{char.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
