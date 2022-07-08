import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import calGreen from "../../../../images/icon/calender_greenbg.png";
import SelectWithImage from "../../Component/SelectWithImage/SelectWithImage";
import Tennis from "../../../../images/icon/Tennis.svg";
import Badminton from "../../../../images/icon/Badminton.svg";
import Squash from "../../../../images/icon/Squash.svg";
import Padel from "../../../../images/icon/Padel.svg";
import AddtoFavourites from "../../../../images/icon/AddtoFavourites.svg";
import favourite from "../../../../images/icon/favourite.svg";
import location from "../../../../images/icon/location.svg";
import clock from "../../../../images/icon/clock.svg";
import gtg_logo from "../../../../images/logo/gtg-logo.svg";
import DropdownMenu from "../../Component/DropdownMenu";
import VerticalTabsCalender from "../../Component/VerticalTabsCalender/VerticalTabsCalender";
import AutoCompleteBox from "../../Component/AutoCompleteBox";
import { Button } from "@material-ui/core";
import "./radioCustom.css";
import npkt from "../../../../images/logo/CompositeLayer.svg";
import dtk from "../../../../images/logo/dtk.svg";
import { Link as NavLink } from 'gatsby';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import DialogBox from "../../Component/DialogBox/DialogBox";
import CheckoutContent from "./CheckoutContent/CheckoutContent";
// import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  pagination_style: {
    display: "flex",
    justifyContent: "center",
    margin: "40px 0",
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  hedding: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "40px 0 10px",
    "& img": {},
    "& .title": {
      fontSize: 24,
      color: "#0a3133",
    },
  },
  filters: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "0px 0 50px",
  },
  btn_primary: {
    backgroundColor: "#209ca2 !important",
    color: "#fff !important",
    minWidth: "160px",
    minHeight: "42px",
  },

  //   Time section
  time_sec: {
    flexGrow: 1,
    backgroundColor: "#fff",
    // padding: "50px 0",
  },
  left: {
    display: "flex",
    gap: 30,
  },

  title: {
    fontSize: 22,
    color: "#0a3133",
    margin: "0 0 10px",
    cursor: 'pointer'
  },
  secondLine: {
    display: "flex",
    gap: 50,
    marginBottom: 15,
    "& p": {
      margin: 0,
      fontSize: 15,
      color: "#979d9d",
    },
  },
  location: {
    display: "flex",
    gap: 10,
    "& p": {
      margin: 0,
      fontSize: 15,
      color: "#979d9d",
    },
  },
  favourite: {
    display: "flex",
    gap: 10,
    cursor: "pointer",
    "& p": {
      margin: 0,
      fontSize: 15,
      color: "#23868b",
    },
  },
  smallBox: {
    height: 100,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    cursor: 'pointer',
  },

  time_item: {
    borderBottom: "2px solid #e7e7eb",
    padding: "50px 0",
  },
  time_item_table: {
    // borderBottom: "2px solid #e7e7eb",
    padding: "50px 0 0",
  },
  btn_green: {
    backgroundColor: "#53b768 !important",
    color: "#fff !important",
    minWidth: "80px",
  },
  last_TableCell: {
    backgroundColor: "#eff0f4 !important",
    color: "#0a3133 !important",
    fontWeight: 600,
  },
  table_heading: {
    "& h5": {
      margin: 0,
      color: "#0a3133",
      fontSize: "18px",
    },
    "& p": {
      margin: 0,
      color: "#979d9d",
      fontSize: "16px",
      fontWeight: 400,
    },
  },
  cell_sport: {
    "& h5": {
      margin: 0,
      color: "#0a3133",
      fontSize: "16px",
      fontWeight: 400,
    },
    "& p": {
      margin: 0,
      color: "#979d9d",
      fontSize: "16px",
      fontWeight: 400,
    },
  },
  table_body: {
    "& .MuiTableCell-root": {
      color: "#0a3133",
      fontSize: "16px",
    },
  },
  btn_green_border: {
    textTransform: "capitalize",
    width: "494px",
    maxWidth: "100%",
    boxShadow: "0px 0px 3px 0px #53b768",
    padding: "10px",
    borderRadius: "6px",
  },

  dialog_custom_style: {
    padding: '30px 0',
    "& #alert-dialog-title, .sc-bczRLJ": {
    padding: '30px 0',

    },
  },





}));

const Data_Inomhus_Utomhus = [{ label: "Inomhus Utomhus" }];
const DATA_sport = [
  { label: "Tennis", icon: Tennis },
  { label: "Padel", icon: Padel },
  { label: "Squash", icon: Squash },
  { label: "Badminton", icon: Badminton },
  { label: "Golf", icon: Badminton },
];
const DATA_AutoComplete = [
  { title: "Stockholms stad 1" },
  { title: "Stockholms stad 2" },
  { title: "Stockholms stad 3" },
  { title: "Stockholms stad 4" },
];

// Table Data
// function createData(Bana, calories, fat, carbs, protein) {
//   return { Bana, calories, fat, carbs, protein };
// }
// const rows = [
//   createData("Bana 1", 159, 6.0, 24, 4.0),
//   createData("Bana 1", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
// ];

const SearchClub = () => {
  const classes = useStyles();
  const [radio, setRadio] = useState("");
  const [isVisible, setVisible] = useState();
  const [isRowIndex, setRowIndex] = useState();
  const [isLikeIndex, setLikeIndex] = useState();

  const [like, setLike] = useState(false);

  const [openDialogBox, setOpenDialogBox] = React.useState(false);
  const time_sec= [
    {
      id: 1,
      title: "Collector Bank Arena (GTG)",
      image: gtg_logo,
      location: "Danderyd",
      km: "3 km bort",
      favourite: "active",
      bg: "#0a3133",
      times: [
        "6:00",
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
      ],

      table_data: {
        title: "Tillgängliga banor",
        date: "Fredag 22 juni, 16:00",
        table_row: [
          {
            col_1: "Bana 1",
            time: "60 min",
            sport: { sport: "Tennis", location: "Hard court • Inomhus" },
            kr: "150 kr",
          },
          {
            col_1: "Bana 1",
            time: "60 min",
            sport: { sport: "Tennis", location: "Hard court • Inomhus" },
            kr: "150 kr",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Näsbyparks TK",
      image: npkt,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#5369a3",
      times: ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    },
    {
      id: 3,
      title: "Näsbyparks TK",
      image: npkt,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#5369a3",
      times: ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"],
    },
    {
      id: 4,
      title: "Danderyds TK",
      image: dtk,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#53a378",
    },
    {
      id: 5,
      title: "Danderyds TK",
      image: dtk,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#53a378",
    },
    {
      id: 6,
      title: "Danderyds TK",
      image: dtk,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#53a378",
    },
    {
      id: 7,
      title: "Danderyds TK",
      image: dtk,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#53a378",
    },
    {
      id: 8,
      title: "Danderyds TK",
      image: dtk,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#53a378",
    },
    {
      id: 9,
      title: "Danderyds TK",
      image: dtk,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#53a378",
    },
    {
      id: 10,
      title: "Danderyds TK",
      image: dtk,
      location: "Täby",
      km: "",
      favourite: "Favourite",
      bg: "#53a378",
    },
  ]

  const handleClickOpenDialogBox = () => {
    setOpenDialogBox(true);
  };
  const handleCloseDialogBox = () => {
    setOpenDialogBox(false);
  };
  const handalChangeFavourite = () => {
    setLike(!like);
  };

  const handleNetworkSelection = (index, index_row) => {
    // console.log("setNetwork e.target___", e.target.value);

    setVisible(index);
    setRowIndex(index_row);
  };

  // let navigate = useNavigate();
  function handleClickNavigate() {
    // navigate("/seeClub");
  }
  

  return (
    <>
      {/* Filters  */}
      <div className={classes.root} style={{ backgroundColor: "#f9fafc" }}>
        <Grid container spacing={3}>
          <Container>
            <Grid item xs={12}>
              <div className={classes.hedding}>
                <img src={calGreen} />{" "}
                <p className="title">Find available times</p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.filters}>
                <SelectWithImage
                  placeholder="Inomhus/Utomhus"
                  options={Data_Inomhus_Utomhus}
                />
                <SelectWithImage placeholder="Sport" options={DATA_sport} />
                <DropdownMenu option={<VerticalTabsCalender />} />
                <AutoCompleteBox
                  label="Klubb, postkod, stad…"
                  options={DATA_AutoComplete}
                />
                <Button
                  className={classes.btn_primary}
                  //   onClick={handleClickNavigate}
                  variant="containedPrimary"
                  color="primary"
                  // autoFocus
                  // disabled
                >
                  Search
                </Button>
              </div>
            </Grid>
          </Container>
        </Grid>
      </div>

    
      {/* Time Section  */}
      <div className={`${classes.root} ${classes.time_sec}`}>
        {time_sec.map(function (data, index_row) {
          return (
            <Container>
              <Grid container spacing={3} className={classes.time_item}>
                <Grid item xs={5}>
                  <div className={classes.left}>
                    <NavLink to="../SeeClub/SeeClub/">
                    <div
                     
                      className={classes.smallBox}
                      style={{ backgroundColor: data.bg }}
                    >
                      <img src={data.image} />
                    </div>
                    </NavLink>
                    
                    <div>
                      <NavLink to="../SeeClub/SeeClub/" style={{textDecoration:'none'}}>
                      <h5  className={classes.title}>{data.title}</h5>
                      </NavLink>
                      
                      <div className={classes.secondLine}>
                        <div className={classes.location}>
                          <img src={location} width={15} />{" "}
                          <p>{data.location}</p>
                        </div>
                        <p>{data.km}</p>
                      </div>
                      <div onClick={handalChangeFavourite}>
                        {index_row === isLikeIndex ? (
                          <div className={classes.favourite}>
                            <img src={favourite} width={16} /> <p>Favourite</p>
                          </div>
                        ) : (
                          <div
                            className={classes.favourite}
                            onClick={() => setLikeIndex(index_row)}
                          >
                            <img src={AddtoFavourites} width={16} />{" "}
                            <p>Add to favourites</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={7}>
                  <div className={classes.right}>
                    <div className="radioCustom">
                      {data.times == undefined ? (
                        <Button onClick={handleClickOpenDialogBox} className={classes.btn_green_border}>
                          Book here
                        </Button>
                      ) : (
                        data.times &&
                        data.times.map((time, index) => (
                          <>
                            <label className="radio-img">
                              <input
                                type="radio"
                                name="Network"
                                value={time}
                                onClick={() =>
                                  handleNetworkSelection(index, index_row)
                                }
                                // id={data.chainId}
                              />
                              <div className="image ">
                                <h5 className="title">{time}</h5>
                              </div>
                            </label>
                            <>
                              {/* {index === isVisible && index_row === isRowIndex ?  */}

                              {/* : (
                              ""
                            )} */}
                            </>
                          </>
                        ))
                      )}
                    </div>

                    {index_row === isRowIndex ? (
                      <Grid
                        container
                        spacing={3}
                        className={classes.time_item_table}
                      >
                        {/* <Grid item xs={5}></Grid> */}
                        <Grid item xs={12}>
                          <TableContainer component={Paper}>
                            <Table
                              className={classes.table}
                              aria-label="caption table"
                            >
                              <TableHead>
                                <TableRow className={classes.table_heading}>
                                  <TableCell colSpan={5}>
                                    <h5>Tillgängliga banor</h5>
                                    <p>Fredag 22 juni, 16:00</p>
                                  </TableCell>
                                </TableRow>
                                {/* <TableRow>
                                          <TableCell>Dessert (100g serving)</TableCell>
                                          <TableCell align="right">Calories</TableCell>
                                        </TableRow> */}
                              </TableHead>
                              <TableBody className={classes.table_body}>
                                {/* 1 */}
                                <TableRow>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    size="16px"
                                    color="#0a3133"
                                  >
                                    Bana 1
                                  </TableCell>
                                  <TableCell
                                    className={classes.cell_clock}
                                    align="left"
                                    size="16"
                                    color="#0a3133"
                                  >
                                    <img src={clock} /> 60 min
                                  </TableCell>
                                  <TableCell
                                    className={classes.cell_sport}
                                    align="left"
                                    size="16"
                                  >
                                    <h5>Tennis</h5>
                                    <p>Hard court • Inomhus</p>
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    className={classes.last_TableCell}
                                  >
                                    150 kr
                                    <br />{" "}
                                    <Button className={classes.btn_green}>
                                      Boka
                                    </Button>
                                  </TableCell>
                                </TableRow>
                                {/* 2 */}
                                <TableRow>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    size="16px"
                                    color="#0a3133"
                                  >
                                    Bana 2
                                  </TableCell>
                                  <TableCell
                                    className={classes.cell_clock}
                                    align="left"
                                    size="16"
                                    color="#0a3133"
                                  >
                                    <img src={clock} /> 90 min
                                  </TableCell>
                                  <TableCell
                                    className={classes.cell_sport}
                                    align="left"
                                    size="16"
                                  >
                                    <h5>Tennis</h5>
                                    <p>Hard court • Inomhus</p>
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    className={classes.last_TableCell}
                                  >
                                    150 kr
                                    <br />{" "}
                                    <Button className={classes.btn_green}>
                                      Boka
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                      </Grid>
                    ) : (
                      " "
                    )}
                  </div>
                </Grid>
              </Grid>
            </Container>
          );
        })}
      </div>
      <div className={classes.pagination_style}>
        <Pagination count={10} variant="outlined" shape="rounded" />
        {/* <Pagination renderItem count={10} variant="outlined" shape="rounded" /> */}
      </div>

      {/* Book Now DialogBox */}
      <DialogBox open={openDialogBox} handleClose={handleCloseDialogBox} DialogTitle="" subTitle="" content={<CheckoutContent />} dialog_custom_style={classes.dialog_custom_style}  />
    </>
  );
};

export default SearchClub;
