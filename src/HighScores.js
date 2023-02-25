import allCountryScores from "./Score";
import { useState } from "react";

export const HighScores = () => {
  const [descOrder, setOrder] = useState(false);

  const HandleClick = (event) => {
    setOrder("ASC");
  };

  return (
    <div>
      <div>
        <button onClick={HandleClick}>Ascending/Descending</button>
      </div>
      {alphabeticalOrderCountries.map((item, key) => {
        return (
          <div className="mainWrapper">
            <h2>High Scores: {item.name}</h2>
            <div className="gridWrapper">
              {item.scores
                .sort((a, b) => b.s - a.s)
                .map((item, key) => {
                  return (
                    <div className="textWrapper">
                      <p>{item.n.toUpperCase()}</p>
                      <p>{item.s}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const alphabeticalOrderCountries = allCountryScores.sort((a, b) => {
  let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});
