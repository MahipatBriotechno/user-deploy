import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Container, makeStyles } from "@material-ui/core";

import Squash from "../../../../images/sport/Squash.svg";
import tennis from "../../../../images/sport/tennis.svg";
import Padel from "../../../../images/sport/Padel.svg";
import Golf from "../../../../images/sport/Golf.svg";
import Badminton from "../../../../images/sport/Badminton.svg";
import map from "../../../../images/bg/map.svg";
import gtg_logo from "../../../../images/logo/gtg-logo.svg";
import location from "../../../../images/icon/location.svg";
import menu_icon from "../../../../images/icon/menu_icon.svg";
import info_gray from "../../../../images/icon/info_gray.svg";

const ButtonColor = "#209ca2";

const useStyles = makeStyles((theme) => ({
  root_main: {
    flexGrow: 1,
    "& h1, h2, h3, h4, h5, h6, p": {
      margin: "0",
      fontFamily: "dm sans",
    },

    // Input Focus For MUI
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#209ca2",
      borderWidth: "1px",
    },
    "& .MuiOutlinedInput-root": {
      "& :hover": {
        borderColor: "#209ca2",
        borderWidth: "1px",
      },
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#000",
    },
  },
  root_content: {
    flexGrow: 1,
    padding: "70px 0 100px",
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

    "& .heading": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "30px",
      "& .title": {
        color: "#0a3133",
        fontSize: "17px",
        marginBottom: "0px",
        
      },
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
    cursor: "pointer",

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

  // FindRacqys.style Start

  bannerSection: {
    backgroundColor: "#f9fafc",
    minHeight: "170px",
    padding: "50px 0 0",
  },

  iconWithText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    // marginBottom: "25px",

    "& .item": {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      cursor: "pointer",
    },

    "& .imgBox": {
      backgroundColor: "#f7f7f8",
      height: "60px",
      width: "60px",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .title": {
      marginBottom: "0",
      fontSize: "30px",
      fontWeight: "600",
      color: "#0a3133",
      fontFamily: 'Plus Jakarta Sans',
    },
    "& .content": {
      cursor: "pointer",
      "& span": {
        fontSize: "18px",
        color: "#a7a7a7",
        fontWeight: "500",
      },
    },
  },

  menu_right: {
    width: "100%",
    "& .item": {
      gap: "7px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // border: "1px solid #e1e1e7",
      // borderRadius: "15px",
      // padding: "5px 0px",
      // borderLeft: "5px solid #209ca2",
      fontWeight: "600",
      marginBottom: "25px",
    },
    "& .left": {
      display: "flex",
      alignItems: "center",
      gap: "20px",
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

  btn_primary: {
    backgroundColor: `${ButtonColor} !important`,
    color: "#fff !important",
    minWidth: "160px",
    minHeight: "42px",
    textTransform: "capitalize",
  },
  formStyle: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  },


  pagination_style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
  }
  // ---------------------------------end
}));

const Menu = [
  { sport: "Tennis", image: tennis, checkbox: "c1" },
  { sport: "Padel", image: Padel, checkbox: "c2" },
  { sport: "Squash", image: Squash, checkbox: "c3" },
  { sport: "Badminton", image: Badminton, checkbox: "c4" },
  { sport: "Golf", image: Golf, checkbox: "c5" },
];

const RightSidebar = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item md={4} xs={4} sm={3} style={{ paddingTop: "20px" }}>
        <Box className={classes.shadowBox}>
          <Box className="heading">
            <h4 className="title">Sporter som visas</h4>
            <img src={menu_icon} />
          </Box>
          <Box className={classes.menu_right}>
            {Menu.map((data) => (
              <Box className="item">
                <div className="left">
                  <img src={data.image} />
                  <span>{data.sport}</span>
                </div>
                <div className="right">
                  {/* <img src={info_gray} /> */}
                  <div className="round">
                    <input type="checkbox"  id={data.checkbox} />
                    <label for={data.checkbox}></label>
                  </div>
                </div>
              </Box>
            ))}
          </Box>
        </Box>
        <p style={{ fontSize: "10px", color: "#979d9d" }}>
          Language • Help • Press • Terms and conditions • Privacy policy •
          About • Cookies • Download App
        </p>
      </Grid>
    </>
  );
};

export default RightSidebar;
