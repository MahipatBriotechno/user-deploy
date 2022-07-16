import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Container, makeStyles } from "@material-ui/core";

import Appbar from "../../Component/Appbar"
import Footer from "../../Component/Footer"
import Squash from "../../../../images/sport/Squash.svg";
import tennis_white from "../../../../images/icon/tennis_white.svg";

import map from "../../../../images/bg/map.svg";
import gtg_logo from "../../../../images/logo/gtg-logo.svg";
import Badminton from "../../../../images/sport/green/Badminton.svg";
import football from "../../../../images/sport/green/football.svg";
import Golf from "../../../../images/sport/green/Golf.svg";
import Padel from "../../../../images/sport/green/Padel.svg";
import tennis from "../../../../images/sport/green/tennis.svg";
import profile from "../../../../images/icon/profile.svg";
import location from "../../../../images/icon/location.svg";
import location_dark from "../../../../images/icon/location_dark.svg";
import dot from "../../../../images/icon/dot.svg";
import calander from "../../../../images/icon/calander.svg";
import julianwanWNoL from "../../../../images/icon/julian-wan-WNoL.svg";
import card_bg from "../../../../images/bg/card_bg.png";
import info_gray from "../../../../images/icon/info_gray.svg";
import home from "../../../../images/icon/home.svg";
import hart from "../../../../images/icon/AddtoFavourites.svg";

import RightSidebar from "./RightSidebar";

import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";
import GoogleMap from "../../Component/GoogleMap";

const SportMans = [
  {
    id: 1,
    profile: profile,
    name: "Philip Salqvist",
    km: "6 km bort",
    sports: [tennis, football],
  },
  {
    id: 2,
    profile: profile,
    name: "Elliot Bennet",
    km: "6 km bort",
    sports: [tennis, football, Badminton],
  },
  {
    id: 3,
    profile: profile,
    name: "Andreas Melander",
    km: "6 km bort",
    sports: [Golf, football],
  },
  {
    id: 4,
    profile: profile,
    name: "Rickard Eliasson",
    km: "6 km bort",
    sports: [tennis, Padel],
  },
  {
    id: 5,
    profile: profile,
    name: "Philip Salqvist",
    km: "6 km bort",
    sports: [tennis, Golf, football],
  },
  {
    id: 6,
    profile: profile,
    name: "Philip Salqvist",
    km: "6 km bort",
    sports: [tennis, football],
  },
  {
    id: 7,
    profile: profile,
    name: "Elliot Bennet",
    km: "6 km bort",
    sports: [tennis, football, Badminton],
  },
  {
    id: 8,
    profile: profile,
    name: "Andreas Melander",
    km: "6 km bort",
    sports: [Golf, football],
  },
  {
    id: 9,
    profile: profile,
    name: "Rickard Eliasson",
    km: "6 km bort",
    sports: [tennis, Padel],
  },
  {
    id: 10,
    profile: profile,
    name: "Philip Salqvist",
    km: "6 km bort",
    sports: [tennis, Golf, football],
  },
  {
    id: 11,
    profile: profile,
    name: "Philip Salqvist",
    km: "6 km bort",
    sports: [tennis, football],
  },
  {
    id: 12,
    profile: profile,
    name: "Elliot Bennet",
    km: "6 km bort",
    sports: [tennis, football, Badminton],
  },
  {
    id: 13,
    profile: profile,
    name: "Andreas Melander",
    km: "6 km bort",
    sports: [Golf, football],
  },
  {
    id: 14,
    profile: profile,
    name: "Rickard Eliasson",
    km: "6 km bort",
    sports: [tennis, Padel],
  },
  {
    id: 15,
    profile: profile,
    name: "Philip Salqvist",
    km: "6 km bort",
    sports: [tennis, Golf, football],
  },
  {
    id: 16,
    profile: profile,
    name: "Philip Salqvist",
    km: "6 km bort",
    sports: [tennis, football],
  },
  {
    id: 17,
    profile: profile,
    name: "Elliot Bennet",
    km: "6 km bort",
    sports: [tennis, football, Badminton],
  },
  {
    id: 18,
    profile: profile,
    name: "Andreas Melander",
    km: "6 km bort",
    sports: [Golf, football],
  },
  {
    id: 19,
    profile: profile,
    name: "Rickard Eliasson",
    km: "6 km bort",
    sports: [tennis, Padel],
  },
  {
    id: 20,
    profile: profile,
    name: "Philip Salqvist",
    km: "6 km bort",
    sports: [tennis, Golf, football],
  },
];

const DataBanks = [
  { title: "Collector Bank Arena (GTG)",  subtitle: "Danderyd",  },
  { title: "PDL Arena Frihamnen",  subtitle: "Stockholm",  },
  { title: "Collector Bank Arena (GTG)",  subtitle: "Danderyd",  },
  { title: "PDL Arena Frihamnen",  subtitle: "Stockholm",  },
  { title: "Collector Bank Arena (GTG)",  subtitle: "Danderyd",  },
  { title: "PDL Arena Frihamnen",  subtitle: "Stockholm",  },
  { title: "Collector Bank Arena (GTG)",  subtitle: "Danderyd",  },
  { title: "PDL Arena Frihamnen",  subtitle: "Stockholm",  },
  { title: "Collector Bank Arena (GTG)",  subtitle: "Danderyd",  },
  { title: "PDL Arena Frihamnen",  subtitle: "Stockholm",  },
  { title: "Collector Bank Arena (GTG)",  subtitle: "Danderyd",  },
  { title: "PDL Arena Frihamnen",  subtitle: "Stockholm",  },
];

const useStyles = makeStyles((theme) => ({
  root_main: {
    flexGrow: 1,
    "& h1, h2, h3, h4, h5, h6, p": {
      margin: "0 0 15px",
      fontFamily: "dm sans",
    },
  },
  root: {
    flexGrow: 1,
    padding: "0 0 100px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  shadowBox: {
    boxShadow: "0px 0px 15px 0px #8080803b",
    padding: "30px",
    marginBottom: "30px",
    borderRadius: "20px",
    "& .title": {
      color: "#0a3133",
      fontSize: "17px",
      marginBottom: "50px",
    },
  },
  wrapper: {
    flexWrap: "wrap",
    display: "flex",
    gap: "13px",
    "& .item": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      padding: "8px 15px",
      borderRadius: "20px",
      border: "1px solid #e1e1e7",
      backgroundColor: "#f8f8f8",
      color: "#0a3133",
      fontWeight: "600",
    },
  },

  day: {
    borderBottom: "1px solid #eaeaed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    "& :last-child": {
      borderBottom: "0px solid #eaeaed",
    },
    "& .daytext": {
      fontSize: "17px",
      color: "#0a3133",
    },
    "& .date": {
      fontSize: "14px",
      color: "#0a3133",
    },
  },
  mapBox: {
    maxWidth: "100%",
    height: "293px",
    overflow: "hidden",
  },
  mapBottomLogo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    top: "-62px",
    "& .logoBox": {
      // backgroundColor: "#0a3133",
      width: "117px",
      height: "117px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      marginBottom: "3px",
      border: "6px solid #fff",
    },
    "& .title": {
      color: "#0a3133",
      fontSize: "22px",
      marginBottom: "5px",
    },
    "& .location": {
      display: "flex",
      gap: "5px",
      fontSize: "15px",
      color: "#979d9d",
      fontWeight: "600",
      marginBottom: "15px",
    },
    "& .ptag": {
      fontSize: "16px",
      color: "#0a3133",
      fontWeight: "600",
      marginBottom: "0px",
      marginTop: '20px',
    },


  },

  // Download App
  // ========================================================================
  // ========================================================================

  tabs_style: {
    "& .MuiTabs-flexContainer": {
      borderBottom: "3px solid #f0f0f0",
    },
    "& .PrivateTabIndicator-colorSecondary-28, .MuiTabs-indicator": {
      backgroundColor: "#209ca3",
      top: "36px",
    },
    "& .MuiTab-wrapper": {
      alignItems: "flex-start",
    },
    "& .MuiTab-textColorInherit.Mui-selected": {
      color: "#209ca3",
    },
    "& .MuiTab-textColorInherit": {
      color: "#cbcccc",
      paddingLeft: "0",
    },
    "& .MuiTab-root": {
      minHeight: "35px",
    },
    "& .tabPanel": {
      padding: "20px 0",
    },
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
  },
  cardRounded: {
    width: "400px",
    maxWidth: "100%",
    borderRadius: "20px",
    "& .header": {
      // backgroundColor: "#db5d5d",
      color: "#fff",
      padding: "20px",
      borderRadius: "30px 30px 0 0",
      // backgroundImage: `url(${"static/src/img/main.jpg"})`
    },
    "& .bottom": {
      display: "flex",
      gap: "7px",
      "& h5": {
        marginBottom: 0,
      },
    },
    "& .top": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "30px",
      "& span": {
        fontSize: "13px",
        fontWeight: "600",
      },
    },
    "& .body": {
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      // alignItems: "center",
      border: "2px solid #80808061",
      borderRadius: "0 0 30px 30px",
      borderTop: "none",
    },
    "& .item": {
      display: "flex",
      gap: "15px",
      alignItems: "center",
      "& h5": {
        marginBottom: "0px",
      },
      marginBottom: "10px",
    },
    "& .right": {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      width: "100px",
    },
    "& .numbers": {
      display: "flex",
      gap: "7px",
      marginTop: "20px",
      "& span": {
        color: "#6cb430",
        backgroundColor: "#e5f5d9",
        width: "23px",
        height: "23px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
      },
    },
  },
  btn_circle: {
    borderRadius: "50px",
    height: "45px",
    width: "45px",
    minWidth: "45px",
    border: "2.5px dashed #1b8186 !important",
    backgroundColor: "#e0eff0",
  },

  // =======================================================
  // ==============================================================

  sport_mans_item: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    borderBottom: "2px solid #eaeaed",
    paddingBottom: "20px",
    "& .right": {
      "& span": {
        fontSize: "13px",
        fontWeight: "500",
        color: "#afb2b4",
      },
    },
    "& .name": {
      marginBottom: "0px",
      fontSize: "17px",
      fontWeight: "600",
      color: "#0a3133",
    },
    "& .images": {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
  },
  sport_mans: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },

  // See Profile Style Start
  // =============================================================
  // ==============================================================

  menu_right: {
    width: '100%',
    "& .item": {
      gap: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #e1e1e7",
      borderRadius: "15px",
      padding: "10px 15px",
      borderLeft: "5px solid #209ca2",
      fontWeight: '600',
      marginBottom: '15px',
    },
    "& .left": {
      display: "flex",
      alignItems: "center",
      gap: "7px",
    },
    "& .right": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& .plusNumber": {
      color: "#6ab928",
      backgroundColor: "#e5f5d9",
      width: "51px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "18px",
    },
  },


  // =====================================
  profile_home_items: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: '20px',
  },
  profile_home_item: {
    // width: '100%',
    "& .item": {
      gap: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #e1e1e7",
      borderRadius: "15px",
      padding: "15px 25px",
      borderLeft: "5px solid #7a41ed",
      fontWeight: '600',
      // marginBottom: '20px',
    },
    "& .left": {
      display: "flex",
      gap: "25px",
    },
    "& .text": {
      "& .title": {
        display: "block",
        marginBottom: '0px',
        fontSize: '19px',
        fontWeight: '600',
      },
      "& span": {
        display: "block",
        color: '#afb2b4',
        fontSize: '17px',
      fontWeight: "500",
      },
    },
    "& .right": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& .plusNumber": {
      color: "#6ab928",
      backgroundColor: "#e5f5d9",
      width: "51px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50px",
      fontWeight: "600",
      fontSize: "18px",
    },
  },


  // ---------------------------------end
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Main Component
const SeeProfile = () => {
  const classes = useStyles();
  const [TabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const Card = () => {
    return (
      <Box className={classes.cardRounded}>
        <Box className="header" style={{ backgroundImage: `url(${card_bg})` }}>
          <Box className="top">
            <img src={tennis_white} />
            <span>2 km bort</span>
          </Box>
          <Box className="bottom">
            <h5>Tennis</h5>
            <img src={dot} />
            <h5>Match</h5>
          </Box>
        </Box>
        <Box className="body">
          <Box className="left">
            <div className="item">
              <img src={location_dark} />
              <h5>Catella Arena</h5>
            </div>
            <div className="item">
              <img src={calander} />
              <h5>Imorgon, 11:00-12:00</h5>
            </div>
            <div className="numbers">
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </Box>
          <Box className="right">
            <Button className={classes.btn_circle}></Button>
            <Button className={classes.btn_circle}></Button>
            <Button className={classes.btn_circle}></Button>
            <Button className={classes.btn_circle}></Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
    <Appbar/>
    <div className={classes.root_main}>
      <Grid item xs={12}>
        <Box className={classes.mapBox}>
         <GoogleMap/>
        </Box>
        <Box className={classes.mapBottomLogo}>
          <div className="logoBox">
            <img src={julianwanWNoL} />
          </div>
          <h4 className="title">Jakob spade</h4>
          <div className="location">
            <img src={location} />
            <span>Danderyd</span>
          </div>
          <p className="ptag">
            Hobbyspelare som spelat hela livet och vill hitta nya personer att
            spela med.
          </p>
        </Box>
      </Grid>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={5}>
            {/* Left Side  */}
            <Grid item md={8} xs={8} sm={3}>
              <Box className={classes.tabs_style}>
                <Tabs
                  value={TabValue}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="Vänner  (63)" {...a11yProps(0)} />
                  <Tab label="Favorit anläggningar (5)" {...a11yProps(1)} />
                </Tabs>

                <TabPanel className="tabPanel" value={TabValue} index={0}>
                  {/* Spelare (5) */}
                  <Box className={classes.sport_mans}>
                    {SportMans.map(function (data, index) {
                      return (
                        <Box className={classes.sport_mans_item} key={index}>
                          <Link to="/User/Pages/MyProfile/MyProfile/">
                           <img src={profile} />
                          </Link>
                          
                          <div className="right">
                            <Link to="/User/Pages/MyProfile/MyProfile/" style={{textDecoration:'none'}}>
                            <h5 className="name">{data.name}</h5>
                            </Link>
                            
                            <span>{data.km}</span>
                            <div className="images">
                              {data.sports.map((img) => (
                                <img src={img} />
                              ))}
                            </div>
                          </div>
                        </Box>
                      );
                    })}
                  </Box>
                </TabPanel>
                <TabPanel className="tabPanel" value={TabValue} index={1}>
                  {/* Favorit anläggningar (5) */}

                  <Box className={classes.profile_home_items}>
                    {DataBanks.map((data) => (
                      <Box className={classes.profile_home_item}>
                        <Box className="item">
                          <div className="left">
                            <img src={home} />
                            <div className="text">
                              <h5 className="title">{data.title}</h5>
                              <span>{data.subtitle}</span>
                            </div>
                          </div>
                          <div className="right">
                            <img src={hart} />
                          </div>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </TabPanel>
              </Box>
            </Grid>

            {/* Right Sidebar  */}
            <RightSidebar />
          </Grid>
        </Container>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default SeeProfile;
