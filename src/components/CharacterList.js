import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(char => {
        return (
          <div>
            <CharacterCard
              key={char.name}
              name={char.name}
              species={char.species}
              gender={char.gender}
              origin={char.origin}
              location={char.location}
              status={char.status}
            />
          </div>
        );
      })}
    </section>
  );
}
