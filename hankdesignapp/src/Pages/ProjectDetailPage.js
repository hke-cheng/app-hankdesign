import React from 'react';
import { withStyles } from "@material-ui/styles";
//
import ProjectHeroImage from "../Components/ProjectHeroImage";
import ProjectIntro from "../Components/ProjectIntro";
import ProjectTitle from "../Components/ProjectTitle";
import ProjectContent from "../Components/ProjectContent";
import ProjectConclusion from "../Components/ProjectConclusion";
//
import Colors from '../Constant/Colors';
//DB

const styles = {
  root: {
    // margin: "40px 10%",
    width:"1080px",
    margin:"48px auto",
    borderRadius: "8px",
    overflow: "hidden",
    background: Colors.greybg,
  },
}

function ProjectDetailPage(props) {
  const { classes, project } = props;
  const { heroImage, projectId, projectIntro, projectMetrics, contributers, contentDetails,isVideo,duration,conclusion } = project[0];
  return (
    <div className={classes.root}>

      <ProjectHeroImage heroImage={heroImage} isVideo={isVideo}/>

      <ProjectTitle projectId={projectId} />

      <ProjectIntro
        projectIntro={projectIntro}
        projectMetrics={projectMetrics}
        contributers={contributers} 
        duration={duration}
        />

      {contentDetails.map(c => <ProjectContent
        isImage={c.isImage}
        subTitle={c.subTitle}
        url={c.url}
        copy={c.content}
        key={c.subTitle}
      />)}

      <ProjectConclusion conclusion={conclusion}/>

    </div>
  );

}

export default withStyles(styles)(ProjectDetailPage);