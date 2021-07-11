import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import img1 from './htmlCss.jpg'
import img2 from './salary.jpg'
import {
  Box,
  GridList,
  Typography,
  makeStyles,
  Grid,
  GridListTile,
  Link,
} from "@material-ui/core";

const list = {
  core: [
    { text: "Translate design into working code" },
    {
      text:
        "Interpret website product mockups and wireframes I get from designers",
    },
    { text: "Create custom site using framework" },
    { text: "Translate a static website into a responsive one" },
    { text: "Development of cross-browser solutions" },
    { text: "Follow industry naming conventions" },
  ],
  skills: [
    {
      name: "Technologies:",
      text: "HTML, CSS, AJAX, Bootstrap, Material-UI, Sass, JSON, LESS",
    },
    {
      name: "Methodologies:",
      text:
        "Atomic CSS, BEM Tools:  Gulp, Git, Photoshop, Trello, Webpack, Grunt, Asana, Zeplin, Sketch, GSAP, ScrollMagic ",
    },
    { name: "Programming languages:", text: "JavaScript" },
    { name: "Operating systems:", text: "Windows, Linux, MacOs" },
    {
      name: "Management methodologies:",
      text: "Scrum, Agile, Kanban, Waterfall",
    },
    { name: "RDBMS:", text: "MS SQL Server" },
    { name: "Languages:", text: "Ukrainian, Russian, English (Intermediate)" },
  ],
  expirience: [
    {
      img:
        `${img1}`,
      link: "https://shaxqq.github.io/switches/index.html",
      title: "Technologies:",
      text: "HTML/CSS",
    },
    {
      img:
        `${img2}`,
      link: "https://shaxqq.github.io/salary/index.html",
      title: "Technologies:",
      text: "HTML/CSS, JS",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg",
      link: "...2",
      title: "Technologies:",
      text: "HTML/CSS",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_960_720.jpg",
      link: "...3",
      title: "Technologies:",
      text: "HTML/CSS, React",
    },
  ],
  education: [
    {
      name: "Kyiv National University of Culture and Arts",
      facult: "Computer sciences",
      year: "2014",
    },
  ],
  additional: [
    { name: "JavaScript:", text: "https://www.codecademy.com/learn​" },
    { name: "HTML/CSS:", text: "https://webref.ru/layout/advanced-html-css​" },
    { name: "HTML/CSS, React:", text: "https://www.freecodecamp.org/" },
  ],
};
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    [theme.breakpoints.up("xs", "sm", "md")]: {
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.up("lg", "xl")]: {
      display: "flex",
    },
  },
  headerOne: {
    [theme.breakpoints.up("xs", "sm", "md")]: {
      borderTop: "1px solid #404242",
      borderBottom: "1px solid #404242",
    },
    [theme.breakpoints.up("lg", "xl")]: {
      background: "#292a2a",
      width: "30%",
      border: "none",
    },
  },
  headerTwoo: {
    [theme.breakpoints.up("xs", "sm", "md")]: {
      borderTop: "1px solid #404242",
      borderBottom: "1px solid #404242",
    },
    [theme.breakpoints.up("lg", "xl")]: {
      background: "#2b2c2c",
      width: "30%",
      border: "none",
    },
  },
  bodyOne: {
    padding: "3.15rem 3.5rem",
    [theme.breakpoints.up("xs", "sm", "md")]: {},
    [theme.breakpoints.up("lg", "xl")]: {
      background: "#292c2c",
      width: "70%",
      margin: 0,
    },
  },
  bodyTwoo: {
    padding: "3.15rem 3.5rem",
    [theme.breakpoints.up("xs", "sm", "md")]: {},
    [theme.breakpoints.up("lg", "xl")]: {
      background: "#292a2a",
      width: "70%",
      margin: 0,
    },
  },
  headerTex: {
    padding: "3.15rem 3.5rem",
    color: "#a4a5a6",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  timePosition: {
    alignItems: "baseline",
  },
  timeLineText: {
    color: "#a4a5a6",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  connectorColor: {
    backgroundColor: "#404242",
  },
  dotColor: {
    backgroundColor: "#e0a80d",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },

  skillsTitle: {
    padding: theme.spacing(1),
    color: "#e0a80d",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  skillsText: {
    padding: theme.spacing(1),
    color: "#a4a5a6",
    fontFamily: "Lato",
    lineHeight: "1.75",
  },
  expRoot: {
  
  },
  expZoom: {
    width: "100%",
    height: "100%",
    position: 'relative',
    transition: "ease .8s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.055)",
      transition: "ease .8s",
    },
  },
  expBord: {
    height: "100%",
    width: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "ease .6s",
    opacity: 0,
    
    "&:hover": {
      background: "rgba(35, 35, 35, 0.6)",
      height: "100%",
      opacity: 1,
      "&::before": {
        border: "1px solid rgba(255,255,255,.25)",
        bottom: "15px",
        content: "' '",
        left: "20px",
        position: "absolute",
        right: "20px",
        top: "15px",
        zIndex: 3,
 //      [theme.breakpoints.up("lg")]: {
 //        right: "20px",
 //        left: "20px",
 //      },
 //      [theme.breakpoints.up("xl")]: {
 //        right: "20px",
 //        left: "20px",
 //      },
      },
    },
  },
  expImg: {
    width: "100%",
    height: "100%",
  },
  expTitle: {
    fontSize: "1.4rem",
    fontWeight: 600,
    lineHeight: "1.45",
    textTransform: "uppercase",
    color: "#e4e5e5",
  },
  expText: {
    color: "#e4e5e5",
    fontSize: "1rem",
  },
  courseTitle: {
    fontWeight: 600,
    color: "rgb(151, 152, 153)",
  },
  courseBox: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("xs", "sm",)]: {flexDirection: 'column'},
    [theme.breakpoints.up("lg", "xl", "md")]: {
      flexDirection: 'row'
    },
  },
  courseContent: {
    display: "flex",
    flexDirection: "column",
    color: "#e0a80d",
    marginTop: "1rem",
    "&:hover": {
      color: "white",
      transition: "all .15s linear",
    },
  },
  courseText: {
    fontWeight: 300,
    color: "#a4a5a6",
    fontFamily: "Lato",
    lineHeight: 1.75,
  },
  courseName: {
    fontWeight: 600,
    color: "inherit",
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.headerOne}>
          <Typography className={classes.headerTex}>
            Core competencies
          </Typography>
        </Box>
        <Box className={classes.bodyOne}>
          <Timeline className={classes.timePosition}>
            {list.core.map((child) => {
              return (
                <TimelineItem key={child.text}>
                  <TimelineSeparator>
                    <TimelineConnector className={classes.connectorColor} />
                    <TimelineDot className={classes.dotColor} />
                    <TimelineConnector className={classes.connectorColor} />
                  </TimelineSeparator>
                  <Box className={classes.content}>
                    <TimelineContent className={classes.timeLineText}>
                      {child.text}
                    </TimelineContent>
                  </Box>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.headerTwoo}>
          <Typography className={classes.headerTex}>Skills</Typography>
        </Box>
        <Box className={classes.bodyTwoo}>
          <Grid container spacing={5}>
            {list.skills.map((child) => {
              return (
                <Grid item xs={4} key={child.text}>
                  <Typography className={classes.skillsTitle}>
                    {child.name}
                  </Typography>
                  <Typography className={classes.skillsText}>
                    {child.text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.headerOne}>
          <Typography className={classes.headerTex}>Experience</Typography>
        </Box>
        <Box className={classes.bodyOne}>
          <Grid container spacing={4} >
            
            {list.expirience.map((child) => {
              return (
                <Grid item sm={6} xs={12}
                  key={child.link}
                >
                  <div className={classes.expZoom}>
                    <Link className={classes.expBord} href={child.link} underline='none' target="_blank">
                      <Typography className={classes.expTitle}>
                        {child.title}
                      </Typography>
                      <Typography className={classes.expText}>
                        {child.text}
                      </Typography>
                      
                    </Link>
                    
                    <img src={child.img} className={classes.expImg} />
                  </div>
                </Grid>
              );
            })}
           
          </Grid>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.headerTwoo}>
          <Typography className={classes.headerTex}>Additional</Typography>
        </Box>
        <Box className={classes.bodyTwoo}>
          <Typography className={classes.courseTitle}>
            online courses:
          </Typography>
          <Box className={classes.courseBox}>
            {list.additional.map((child) => {
              return (
                <Link
                  href="#"
                  className={classes.courseContent}
                  underline="none"
                  key={child.text}
                >
                  <Typography className={classes.courseName}>
                    {child.name}
                  </Typography>
                  <Typography className={classes.courseText}>
                    {child.text}
                  </Typography>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Box className={classes.headerOne}>
          <Typography className={classes.headerTex}>Education</Typography>
        </Box>
        <Box className={classes.bodyOne}>
          {list.education.map((child)=>{
            return (
              <span className={classes.courseTitle} key={child.name}>
                <Typography>{child.name}</Typography>
                <Typography>{child.facult}</Typography>
                <Typography>{child.year}</Typography>
              </span>
            )
          })}
        </Box>
      </Box>
    </div>
  );
};
