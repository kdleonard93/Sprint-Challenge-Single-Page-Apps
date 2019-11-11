import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const fetchLocation = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
          setLocation(response.data.results);
          console.log(response.data);
        })
        .catch(error => {
          console.log("Error: ", error);
        });
    };
    fetchLocation();
  }, []);
  return (
    <section className="location-list grid-view">
      {location.map(local => (
        <div>
          <LocationCard key={local.name} location={local}></LocationCard>
        </div>
      ))}
    </section>
  );
}

export default LocationsList;
