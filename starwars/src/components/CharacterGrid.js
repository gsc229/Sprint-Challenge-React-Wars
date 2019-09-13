import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
/* import CharacterCard from "./CharacterCard"; */
/* import styled from "styled-components"; */

export default function CharacterGrid() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        // response.data.results is an array of objects:
        const peeps = response.data.results;

        setPeopleData(peeps);
        //console.log's an array of objects. here can do peeps[0].name no problem.
        console.log(`From Effect`, response.data);
      })
      .catch(error => {
        console.log("Sorry, this ain't working", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>CHARACTERS</h1>
      <div className="entry">
        {peopleData.map(person => {
          return (
            <CharacterCard
              key={person.name}
              name={person.name}
              height={person.height}
              mass={person.mass}
              hair-color={person.hair_color}
            />
          );
        })}
      </div>
      <h1></h1>
    </div>
  );
}
