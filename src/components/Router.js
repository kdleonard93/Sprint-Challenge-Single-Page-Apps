import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";

function AppRouter() {
  return (
    <div>
      <Route exact path="/" component={WelcomePage}></Route>
      <Route path="/character" component={CharacterList}></Route>
      <Route path="/location" component={LocationsList}></Route>
      <Route path="/episode" component={EpisodeList}></Route>
    </div>
  );
}
export default AppRouter;
