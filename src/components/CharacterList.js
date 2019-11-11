import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {character.map(char => {
        return (
          <div>
            <CharacterCard
              key={char.id}
              name={char.name}
              species={char.species}
              gender={char.gender}
              origin={char.origin}
              location={char.location}
              status={char.status}
            ></CharacterCard>
          </div>
        );
      })}
    </section>
  );
}
