import React from 'react';
//
import { Route, Switch } from "react-router-dom";
//
import HomePage from "./Pages/HomePage"
import ProjectPage from "./Pages/ProjectPage"
import ScrollToTop from "./ScrollToTop";

import './App.css';
//
import Colors from "./Constant/Colors";
// //Data
import Projects from "./ProjectData/Projects";

function App(props) {

  return (
    <div className="App">
      <Switch>

        <Route exact path="/" render={(routeHistory) => <>
          <ScrollToTop />
          <HomePage
            {...routeHistory}
            colors={Colors}
            projectsDB={Projects} />
        </>
        } />

        <Route exact path="/projectDetail/:projectId" render={() => <>
          <ScrollToTop />
          <ProjectPage projectsDB={Projects} />
        </>
        } />

      </Switch>
    </div>
  );
}

export default App;
