import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocations(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <section className="location-list grid-view">
      {locations.map(local => (
        <div>
          <LocationCard
            key={local.name}
            name={local.name}
            type={local.type}
            dimension={local.dimension}
            residents={local.residents}
          />
        </div>
      ))}
    </section>
  );
}

export default LocationsList;
