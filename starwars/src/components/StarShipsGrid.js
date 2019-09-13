import React, { useEffect, useState } from "react";
import axios from "axios";
import StarShipCard from "./StarShipCard";
/* import CharacterCard from "./CharacterCard"; */
/* import styled from "styled-components"; */

export default function StarShipsGrid() {
  const [starShipData, setStarShipData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/starships/`)
      .then(response => {
        // response.data.results is an array of objects:
        const ships = response.data.results;

        setStarShipData(ships);
        //console.log's an array of objects. here can do peeps[0].name no problem.
        //console.log(`From Ships Effect`, ships);
      })
      .catch(error => {
        console.log("Sorry, this ain't working", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>STARSHIPS</h1>
      <div className="entry">
        {starShipData.map(ship => {
          return (
            <StarShipCard
              key={ship.name}
              name={ship.name}
              model={ship.model}
              manufacturer={ship.manufacturer}
              costCredits={ship.cost_in_credits}
              long={ship.length}
            />
          );
        })}
      </div>
      <h1></h1>
    </div>
  );
}
