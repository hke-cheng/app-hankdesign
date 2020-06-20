import React from 'react';
//
import { Route, Switch } from "react-router-dom";
//
import NavBar from "./Components/NavBar"
import HomePage from "./Pages/HomePage"
import ProjectPage from "./Pages/ProjectPage"
import AboutPage from "./Pages/AboutPage"
import './App.css';
//
import Colors from "./Constant/Colors";
// //Data
import Projects from "./ProjectData/Projects";

function App(props) {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(routeHistory) => <HomePage
          {...routeHistory}
          colors={Colors}
          projectsDB={Projects} />}
        />
        <Route exact path="/projectDetail/:projectId" render={() => <ProjectPage projectsDB={Projects} />} />
        <Route exact path="/about" render={() => <AboutPage />} />
      </Switch>
    </div>
  );
}

export default App;
