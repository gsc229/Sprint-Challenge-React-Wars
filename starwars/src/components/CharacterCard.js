import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 3px solid black;
  color: white;
  margin: 20px auto;
`;

const CharacterCard = props => {
  return (
    <Card className="card" key={props.name}>
      <h2>{props.name}</h2>
      <div className="character-data">
        <p>Height: {props.height} cm</p>
        <p>Weight: {props.mass} kilos</p>
        <p>Hair Color: {props.hairColor}</p>
        <p>Height: {props.height} cm</p>
      </div>
    </Card>
  );
};

export default CharacterCard;
