import React from 'react'
import { withStyles } from "@material-ui/styles";
import ProjectDetailPage from "./ProjectDetailPage";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Overlay from "../Components/Overlay"
import { withRouter } from 'react-router';

const styles = {
  root: {},
  wrapper: {},
};

function ProjectPage(props) {

  const { classes, projectsDB } = props;
  const routeParam = props.match.params.projectId;

  // Function, find the right data in the projectDB
  function getProjectData(projectsDB) {
    const projectData = projectsDB.filter(p => p.projectId === routeParam)
    return projectData;
  };
  const PROJECTDATA = getProjectData(projectsDB)

  return (
    <div className={classes.root}>

      <NavBar isDetail />
      <ProjectDetailPage project={PROJECTDATA} />
      <Footer />

    </div>
  )
};


export default withRouter(withStyles(styles)(ProjectPage));