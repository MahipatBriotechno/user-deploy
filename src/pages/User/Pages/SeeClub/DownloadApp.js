import { Box, Button, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";


import tennis_white from "../../../../images/icon/tennis_white.svg";
import tennis from "../../../../images/sport/tennis.svg";

import Golf from "../../../../images/sport/Golf.svg";
// import Badminton from "../../../../images/sport/Badminton.svg";
import map from "../../../../images/bg/map.svg";
import calander from "../../../../images/icon/calander.svg";
import dot from "../../../../images/icon/dot.svg";
import location from "../../../../images/icon/location.svg";
import location_dark from "../../../../images/icon/location_dark.svg";
import gtg_logo from "../../../../images/logo/gtg-logo.svg";

import card_bg from "../../../../images/bg/card_bg.png";

import RightSidebar from "./RightSidebar";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Badminton from "../../../../images/sport/green/Badminton.svg";
import football from "../../../../images/sport/green/football.svg";

import Padel from "../../../../images/sport/green/Padel.svg";

import { Link } from 'gatsby';
import profile from "../../../../images/icon/profile.svg";
// import { useNavigate } from "react-router-dom";
const SportMans = [
  {
      id: 1,
      profile: profile,
      name: 'Philip Salqvist',
      km: '6 km bort',
      sports: [tennis, football ]
  },
  {
      id: 2,
      profile: profile,
      name: 'Elliot Bennet',
      km: '6 km bort',
      sports: [tennis, football, Badminton ]
  },
  {
      id: 3,
      profile: profile,
      name: 'Andreas Melander',
      km: '6 km bort',
      sports: [Golf, football ]
  },
  {
      id: 4,
      profile: profile,
      name: 'Rickard Eliasson',
      km: '6 km bort',
      sports: [tennis, Padel ]
  },
  {
      id: 5,
      profile: profile,
      name: 'Philip Salqvist',
      km: '6 km bort',
      sports: [tennis, Golf, football ]
  },
  {
      id: 6,
      profile: profile,
      name: 'Philip Salqvist',
      km: '6 km bort',
      sports: [tennis, football ]
  },
  {
      id: 7,
      profile: profile,
      name: 'Elliot Bennet',
      km: '6 km bort',
      sports: [tennis, football, Badminton ]
  },
  {
      id: 8,
      profile: profile,
      name: 'Andreas Melander',
      km: '6 km bort',
      sports: [Golf, football ]
  },
  {
      id: 9,
      profile: profile,
      name: 'Rickard Eliasson',
      km: '6 km bort',
      sports: [tennis, Padel ]
  },
  {
      id: 10,
      profile: profile,
      name: 'Philip Salqvist',
      km: '6 km bort',
      sports: [tennis, Golf, football ]
  },
  {
      id: 11,
      profile: profile,
      name: 'Philip Salqvist',
      km: '6 km bort',
      sports: [tennis, football ]
  },
  {
      id: 12,
      profile: profile,
      name: 'Elliot Bennet',
      km: '6 km bort',
      sports: [tennis, football, Badminton ]
  },
  {
      id: 13,
      profile: profile,
      name: 'Andreas Melander',
      km: '6 km bort',
      sports: [Golf, football ]
  },
  {
      id: 14,
      profile: profile,
      name: 'Rickard Eliasson',
      km: '6 km bort',
      sports: [tennis, Padel ]
  },
  {
      id: 15,
      profile: profile,
      name: 'Philip Salqvist',
      km: '6 km bort',
      sports: [tennis, Golf, football ]
  },
  {
      id: 16,
      profile: profile,
      name: 'Philip Salqvist',
      km: '6 km bort',
      sports: [tennis, football ]
  },
  {
      id: 17,
      profile: profile,
      name: 'Elliot Bennet',
      km: '6 km bort',
      sports: [tennis, football, Badminton ]
  },
  {
      id: 18,
      profile: profile,
      name: 'Andreas Melander',
      km: '6 km bort',
      sports: [Golf, football ]
  },
  {
      id: 19,
      profile: profile,
      name: 'Rickard Eliasson',
      km: '6 km bort',
      sports: [tennis, Padel ]
  },
  {
      id: 20,
      profile: profile,
      name: 'Philip Salqvist',
      km: '6 km bort',
      sports: [tennis, Golf, football ]
  },
  ];
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
const DownloadApp = () => {
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
      textAlign: "left",
      color: theme.palette.text.secondary,
      boxShadow:'none !important'
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
      top: "-57px",
      "& .logoBox": {
        backgroundColor: "#0a3133",
        width: "101px",
        height: "101px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        marginBottom: "20px",
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
      cursor: 'pointer',
  
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
    // ---------------------------------end
  }));
  const classes = useStyles();
  const [TabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // let navigate = useNavigate();
  function navigateSeeProfile() {
    // navigate("/seeProfile");
  }

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
          <Link to="/User/Pages/SeeProfile/SeeProfile/">
          <Button onClick={navigateSeeProfile} className={classes.btn_circle}></Button>
          </Link>
          <Link to="/User/Pages/SeeProfile/SeeProfile/">
          <Button onClick={navigateSeeProfile} className={classes.btn_circle}></Button>
          </Link>
          <Link to="/User/Pages/SeeProfile/SeeProfile/">
          <Button onClick={navigateSeeProfile} className={classes.btn_circle}></Button>
          </Link>
          <Link to="/User/Pages/SeeProfile/SeeProfile/">
          <Button onClick={navigateSeeProfile} className={classes.btn_circle}></Button>
          </Link>
            
              </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
   
    
    <div className={classes.root_main}>
      <Grid item xs={12}>
        <Box className={classes.mapBox}>
          <img src={map} />
        </Box>
        <Box className={classes.mapBottomLogo}>
          <div className="logoBox">
            <img src={gtg_logo} />
          </div>
          <h4 className="title">Collector Bank Arena (GTG)</h4>
          <div className="location">
            <img src={location} />
            <span>Danderyd</span>
          </div>
          <Button variant="outlined">Book court here</Button>
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
                  <Tab label="Racqys (10)" {...a11yProps(0)} />
                  <Tab label="Spelare (5)" {...a11yProps(1)} />
                </Tabs>

                <TabPanel className="tabPanel" value={TabValue} index={0}>
                  {/* Racqys (10) */}
                  <Box className={classes.cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </Box>
                </TabPanel>
                <TabPanel className="tabPanel" value={TabValue} index={1}>
                  {/* Spelare (5) */}
                  <Box className={classes.sport_mans}>
                    {SportMans.map(function (data, index) {
                      return (
                        <Box
                          onClick={navigateSeeProfile}
                          className={classes.sport_mans_item}
                          key={index}
                        >
                          <img src={profile} />
                          <div className="right">
                            <h5 className="name">{data.name}</h5>
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
              </Box>
            </Grid>

            {/* Right Sidebar  */}
            <RightSidebar />
          </Grid>
        </Container>
      </div>
    </div>
   
    </>
  );
};

export default DownloadApp;
