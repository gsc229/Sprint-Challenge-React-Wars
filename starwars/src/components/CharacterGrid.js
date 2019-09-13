import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function CharacterGrid() {
  const [peopleData, setPeopleData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const LeftButton = styled.button`
    width: 100px;
    height: 30px;
    background: ${props => (props.primary ? "#fff" : "#2a2223")};
    color: ${props => (props.primary ? "#2a2223" : "#fff")};
    border: 0;
    margin: 5px 10px;
    transition: 0.2s ease-in;
    &:hover {
      background: ${props => (props.primary ? "#2a2223" : "#fff")};
      color: ${props => (props.primary ? "#fff" : "#2a2223")};
    }
  `;

  const RightButton = styled.button`
    width: 100px;
    height: 30px;
    background: ${props => (props.primary ? "#fff" : "#2a2223")};
    color: ${props => (props.primary ? "#2a2223" : "#fff")};
    border: 0;
    margin: 5px 10px;
    transition: 0.2s ease-in;
    &:hover {
      background: ${props => (props.primary ? "#2a2223" : "#fff")};
      color: ${props => (props.primary ? "#fff" : "#2a2223")};
    }
  `;

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageNum}`)
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
  }, [pageNum]);

  const pageLeft = e => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const pageRight = e => {
    if (pageNum < 9) {
      setPageNum(pageNum + 1);
    }
  };
  console.log(`Page: ${pageNum}`);
  console.log(`Page: ${pageNum}`);

  return (
    <div className="container">
      <h1>CHARACTERS</h1>
      <p>{`page: ${pageNum}`}</p>
      <div className="btn-container">
        <LeftButton onClick={pageLeft}>&lt;&lt;&lt;</LeftButton>
        <RightButton onClick={pageRight}>&gt;&gt;&gt;</RightButton>
      </div>
      <div className="entry">
        {peopleData.map(person => {
          return (
            <CharacterCard
              key={person.name}
              name={person.name}
              height={person.height}
              mass={person.mass}
              hairColor={person.hair_color}
            />
          );
        })}
      </div>
      <h1></h1>
    </div>
  );
}
