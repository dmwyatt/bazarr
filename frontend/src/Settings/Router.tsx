import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSetSidebar } from "../@redux/hooks/site";
import { RouterEmptyPath } from "../special-pages/404";
import General from "./General";
import Languages from "./Languages";
import Notifications from "./Notifications";
import Providers from "./Providers";
import Radarr from "./Radarr";
import Scheduler from "./Scheduler";
import Sonarr from "./Sonarr";
import Subtitles from "./Subtitles";
import UI from "./UI";

interface Props {}

const Router: FunctionComponent<Props> = () => {
  useSetSidebar("Settings");
  return (
    <Switch>
      <Route exact path="/settings">
        <Redirect exact to="/settings/general"></Redirect>
      </Route>
      <Route exact path="/settings/general">
        <General></General>
      </Route>
      <Route exact path="/settings/ui">
        <UI></UI>
      </Route>
      <Route exact path="/settings/sonarr">
        <Sonarr></Sonarr>
      </Route>
      <Route exact path="/settings/radarr">
        <Radarr></Radarr>
      </Route>
      <Route exact path="/settings/languages">
        <Languages></Languages>
      </Route>
      <Route exact path="/settings/subtitles">
        <Subtitles></Subtitles>
      </Route>
      <Route exact path="/settings/scheduler">
        <Scheduler></Scheduler>
      </Route>
      <Route exact path="/settings/providers">
        <Providers></Providers>
      </Route>
      <Route exact path="/settings/notifications">
        <Notifications></Notifications>
      </Route>
      <Route path="/settings/*">
        <Redirect to={RouterEmptyPath}></Redirect>
      </Route>
    </Switch>
  );
};

export default Router;
