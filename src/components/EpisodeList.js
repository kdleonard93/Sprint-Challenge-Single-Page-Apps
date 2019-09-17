import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = props => {
  const { episode, setEpisode } = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        setEpisode(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, [setEpisode]);

  return (
    <section className="episode-list grid-view">
      {episode.map(epi => {
        return (
          <div>
            <EpisodeCard key={epi.id} episode={epi}></EpisodeCard>
          </div>
        );
      })}
    </section>
  );
};

export default EpisodeList;
