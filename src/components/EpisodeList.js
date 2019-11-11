import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = props => {
  const { episode, setEpisodes } = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        setEpisodes(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  console.log(episode);

  return (
    <section className="episode-list grid-view">
      {episode.map(epi => {
        return (
          <div>
            <EpisodeCard
              key={epi.name}
              episode={epi.episode}
              date={epi.air_date}
            />
          </div>
        );
      })}
    </section>
  );
};

export default EpisodeList;
