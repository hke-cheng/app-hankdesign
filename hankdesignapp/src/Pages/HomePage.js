import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles"
//
import Hero from "../Components/Hero"
import Card from "../Components/Card";
import SmallCard from "../Components/SmallCard";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
//
import Colors from "../Constant/Colors";

const styles = {
  gridContainer: {
    display: "grid",
    width: "1080px",
    gridTemplateColumns: "50% 50%",
    gridColumnGap: "16px",
    gridRowGap: "16px",
    margin: "0px auto",
    background: Colors.black2,
  }
}

function HomePage(props) {

  const { classes, projectsDB } = props;

  return (
    <div>
      <NavBar isHome />
      <Hero
        slogan="HEY! THIS IS HANK KE"
        content="Design should aim at problems, helping business and users to achieve success."
      />

      <Card
        title="Cheat Sheets: UI terms"
        intro="Featured Article at Medium" />


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

      <Footer />


    </div>
  );
}

export default withStyles(styles)(HomePage);