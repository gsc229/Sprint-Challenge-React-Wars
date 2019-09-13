import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 3px solid black;
  color: white;
  margin: 20px auto;
`;

const VehicleCard = props => {
  return (
    <Card className="card" key={props.name}>
      <h2>{props.name}</h2>
      <div className="ship-data">
        <p>Model: {props.model} cm</p>
        <p>Manufacturer: {props.manufacturer} kilos</p>
        <p>Cost in Credits: {props.costCredits}</p>
        <p>Length: {props.long}</p>
      </div>
    </Card>
  );
};

export default VehicleCard;
