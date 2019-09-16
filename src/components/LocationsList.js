import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        setLocation(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <section className="location-list grid-view">
      {location.map(local => {
        return (
          <div>
            <LocationCard key={local.id} location={location}></LocationCard>
          </div>
        );
      })}
    </section>
  );
}

export default LocationsList;
