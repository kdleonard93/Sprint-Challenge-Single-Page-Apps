import React from "react";
import { Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";

function AppRouter() {
  return (
    <div>
      <Route exact path="/character" component={CharacterList}></Route>
      <Route exact path="/location" component={LocationsList}></Route>
      <Route exact path="/episode" component={EpisodeList}></Route>
    </div>
  );
}
export default AppRouter;
