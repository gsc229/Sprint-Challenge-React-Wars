import React, { useEffect, useState } from "react";
import axios from "axios";
import VehicleCard from "./VehicleCard";

export default function VehiclesGrid() {
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/vehicles/`)
      .then(response => {
        // response.data.results is an array of objects:
        const vehicles = response.data.results;

        setVehiclesData(vehicles);
        //console.log's an array of objects. here can do peeps[0].name no problem.
        console.log(`From Vehicles Effect`, vehicles);
      })
      .catch(error => {
        console.log("Sorry, this ain't working", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>VEHICLES</h1>

      <div className="entry">
        {vehiclesData.map(vehicle => {
          return (
            <VehicleCard
              key={vehicle.name}
              name={vehicle.name}
              model={vehicle.model}
              manufacturer={vehicle.manufacturer}
              costCredits={vehicle.cost_in_credits}
              long={vehicle.length}
            />
          );
        })}
      </div>

      <h1></h1>
    </div>
  );
}
