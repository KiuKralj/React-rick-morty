import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import SinglePage from "./SinglePage/SinglePage";
import { CHARACTER_URL } from "./constants";

function App() {
  const [data, setData] = useState([]);
  const [clickedChar, setClickedChar] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(CHARACTER_URL + `?page=${page}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [page]);

  const handleNextPageChange = () => {
    if (page >= 1 && page <= 42) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPageChange = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="App">
      {!clickedChar ? (
        <HomePage
          characters={data}
          setClickedChar={setClickedChar}
          nextPage={handleNextPageChange}
          prevPage={handlePrevPageChange}
          page={page}
          setPage={setPage}
        />
      ) : (
        <SinglePage clickedChar={clickedChar} setClickedChar={setClickedChar} />
      )}
    </div>
  );
}

export default App;
