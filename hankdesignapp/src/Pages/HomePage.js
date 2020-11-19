import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles"

import stove from "../Constant/stove.png"
//
import Hero from "../Components/Hero"
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import SmallCard from "../Components/SmallCard";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
//
import Colors from "../Constant/Colors";
import { Divider } from '@material-ui/core';

const styles = {
  gridContainer: {
    display: "grid",
    width:"1080px",
    gridTemplateColumns: "532px 532px",
    gridColumnGap: "16px",
    gridRowGap: "16px",
    margin: "0px auto",
  },

  '@media (max-width: 1128px)':{
    gridContainer: {
      width:"800px",
      gridTemplateColumns: "392px 392px",
    }
  },

  '@media (max-width: 820px)':{
    gridContainer: {
      width:"700px",
      gridTemplateColumns: "342px 342px",
    }
  },

  '@media (max-width: 720px)':{
    gridContainer: {
      width:"425px",
      gridTemplateColumns: "100%",
    }
  },

  '@media (max-width: 425px)':{
    gridContainer: {
      width:"300px",
      gridTemplateColumns: "100%",
    }
  },

}

function HomePage(props) {

  const { classes, projectsDB } = props;

  return (
    <div>
      <NavBar isHome />
       
      <Hero
        slogan="Empathy and Focus"
        content="☻ ⊢ Hey! I'm Hank (Chenghan) Ke. Nice to meet you ⊣ ☻"
      />

      <Card
        title="Cheat Sheets: UI terms"
        intro="Hit 2200+ 👏 at Medium"
      />



      <div className={classes.gridContainer}>
        {projectsDB.map((p) => <SmallCard
          backgroundColor={p.backgroundColor}
          title={p.projectId}
          intro={p.projectHightlight}
          frontImage={p.frontImage}
          program={p.program}
          textColor={p.textColor}
          key={p.projectId}
        />)}
      </div>

      <div className={classes.gridContainer}>

        <Card2
          backgroundColor="#04172A"
          frontIamge=""
          title="Design for IoT - Smart Knob "
          intro="Medium · Blog"
          linkTo="https://medium.com/@hankkechenghan/smart-knob-how-i-design-an-iot-project-f388550b90b8"
        />

        <Card2
          backgroundColor="#04172A"
          frontIamge=""
          title="Service Design - Costco Sharing"
          intro="Medium · Blog"
          linkTo="https://medium.com/@hankkechenghan/costco-sharing-service-design-1701b4fb24c3"
        />

      </div>


      <Footer />


    </div>
  );
}

export default withStyles(styles)(HomePage);