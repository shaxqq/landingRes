import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Avatar,
  Link,
  Box,
  Divider,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: `url(${"https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    "&::before": {
      content: '" "',
      background: "rgba(35, 35, 35, .8)",
      position: "absolute",
      width: "100%",
      height: "100vh",
      zIndex: 0,
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1,
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      justifyContent: "space-between",
    },
    [theme.breakpoints.up('sm', 'md')]: {
      flexDirection: 'row',
      justifyContent: "space-around",
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: "space-around",
    },
    [theme.breakpoints.up('xl')]: {
      flexDirection: 'row',
      justifyContent: "space-between",
    },

  },
  avatar: {
    margin: theme.spacing(1),
  },
  name: {
    color: "white",
    fontSize: 30,
  },
  nameInfo: {
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1.75rem 1.75rem 0rem',
    },
    [theme.breakpoints.up('lg', 'xl')]: {
      paddingTop: 0,
      alignItems: 'end',
    },
  },
  surname: {
    fontSize: 40,
    lineHeight: 1.25,
    color: "#e0a80d",
  
  },
  information: {
    alignSelf: 'flex-end',
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      alignSelf: 'auto',
    },
    [theme.breakpoints.up('lg', 'xl')]: {
      alignSelf: 'flex-end',
    },
  },
  infoBox: {
    display: "flex",
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      display: "block",
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg', 'xl')]: {
      display: "flex",
      textAlign: 'left',
    },
  },
  info: {
    marginLeft: '20px',
    color: '#979899',
  },
  dividerStyle: {
    backgroundColor: '#ffffff',
    margin: '20px 0',
  },
  social: {
    display: "flex",
    justifyContent: 'flex-end',
    paddingBottom: 80,
    [theme.breakpoints.up('xs', 'sm', 'md')]: {
      paddingBottom: 10,
    },
    [theme.breakpoints.up('lg', 'xl')]: {
      paddingBottom: 80,
    },
  },
  iconMargin: {
    marginBottom: 5,
    color: '#979899',
    '&:hover': {
      color: '#e0a80d',
      transition: 'all .15s linear', 
    },
  },
  
}));

export const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <Box className={classes.nameInfo}>
          <Typography
            variant="button"
            component="p"
            className={classes.surname}
          >
            Sobolev
          </Typography>
          <Typography variant="button" component="p" className={classes.name}>
            Roman
          </Typography>
        </Box>
        <Box className={classes.information}>
          <Box className={classes.infoBox}>
            <span>
              <Typography component="p" style={{ fontWeight: 600, color: '#979899' }}>Location</Typography>
              <Typography component="h4" style={{ fontWeight: 300, color: '#979899' }}>Kyiv</Typography>
            </span>
            <span className={classes.info}>
              <Typography component="p" style={{ fontWeight: 600 }}>Phone</Typography>
              <Typography component="p" style={{ fontWeight: 300 }}>+380 (93) 390-48-27</Typography>
            </span>
            <span className={classes.info}>
              <Typography component="p" style={{ fontWeight: 600 }}>Email</Typography>
              <Typography component="p" style={{ fontWeight: 300 }}>shaxqq@gmail.com</Typography>
            </span>
            <span className={classes.info}>
              <Typography component="p" style={{ fontWeight: 600 }}>Skype</Typography>
              <Typography component="p" style={{ fontWeight: 300 }}>tenz931</Typography>
            </span>
          </Box>
          <Divider className={classes.dividerStyle} />
          <Box className={classes.social}>
            <Link
              href="https://www.facebook.com/roman.sobolev"
              color="textPrimary"
              target="_blank"
              className={classes.avatar}
            >
              <FacebookIcon fontSize="large" className={classes.iconMargin} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/roman-sobolev-bb3382173/"
              color="textPrimary"
              target="_blank"
              className={classes.avatar}
            >
              <LinkedInIcon fontSize="large" className={classes.iconMargin} />
            </Link>
            <Link
              href="https://github.com/shaxqq"
              color="textPrimary"
              target="_blank"
              className={classes.avatar}
            >
              <GitHubIcon fontSize="large" className={classes.iconMargin} />
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

// <Avatar src="https://www.iconfinder.com/data/icons/users-6/100/user-men-1-512.png"className={classes.avatar}/>
