import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";
import info from "../../../../../images/icon/info.svg";
import person from "../../../../../images/icon/person.svg";
import users from "../../../../../images/icon/users.svg";
import Tennis from "../../../../../images/icon/Tennis.svg";
import calander from "../../../../../images/icon/calander.svg";
import calander_mmyy from "../../../../../images/icon/calendar-mm-yy.svg";
import lock from "../../../../../images/icon/lock.svg";
import flagIcon from "../../../../../images/icon/flagIcon.svg";
import clock from "../../../../../images/icon/clock.svg";
import credit_card from "../../../../../images/icon/credit-card.svg";
import credit_card_input from "../../../../../images/icon/credit-card-input.svg";
import visa_card from "../../../../../images/icon/visa_card.svg";
import Mastercard from "../../../../../images/icon/Mastercard.svg";
import AMEX_card from "../../../../../images/icon/AmExIcon.svg";
import adyen from "../../../../../images/icon/adyen.svg";
import Swish_payment from "../../../../../images/icon/Swish_payment.svg";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import PeopleIcon from "@material-ui/icons/People";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import SelectWithIcon from "../../../Component/SelectWithIcon/SelectWithIcon";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import RadioLoggainContent from "./RadioLoggainContent";
import { Link } from "gatsby";
// import { useNavigate } from "react-router-dom";


const DATA_PRICE = [
  { label: "SEK", value: 1, icon: flagIcon },
  { label: "SEK", value: 2, icon: flagIcon },
  { label: "SEK", value: 3, icon: flagIcon },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "1000px",
    maxWidth: "100%",
    "& h1, h2, h3, h4, h5, h6, p": {
      margin: "0 0 15px",
      fontFamily: "dm sans",
    },
  },

  container: {
    padding: "0 24px 16px",
  },
  left: {
    backgroundColor: "#f9fafc",
    display: "flex",
    flexDirection: "column",
  },
  left_body: {
    padding: "0 10px",
  },
  right: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  right_body: {
    padding: "0px 20px 0px 40px",
  },
  heading: {
    fontSize: "25px",
    "& h3": {
      margin: "0 0 15px",
    },
  },
  selected_sport_detail: {
    backgroundColor: "#fff",
    borderLeft: "5px solid #209ca2",
    padding: "20px 20px 10px",
    borderRadius: "10px",
    boxShadow: "0px 0 2px 0px grey",
    marginBottom: "22px",
    "& select": {
      border: "1px solid #dfdfe2",
      padding: "2px",
      borderRadius: "4px",
      cursor: "pointer",
    },

    "& .MuiListItemText-secondary": {
      margin: "0 0 0 !important",
    },

    "& .list": {
      display: "flex",
      gap: "15px",
      fontSize: "18px",
      marginBottom: "15px",

      "& span": {
        color: "#b4b4b4",
      },
      "& img": {
        width: "20px",
      },
      "& .title": {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        fontSize: "18px",
        fontFamily: "dm sans",
        "& h5": {
          marginBottom: 0,
        },
      },
    },
  },

  // Collaps Section
  collaps_style: {
    borderLeft: "none",
    paddingTop: 10,
    "& .MuiListItem-gutters": {
      padding: "0",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "38px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
      margin: "10px 0 15px",
    },
    "& .close_icon": {
      position: "absolute",
      marginTop: "25px",
      marginLeft: "-35px",
      cursor: "pointer",
    },
    "& .add_spelare": {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "#209ca2",
      fontSize: "14px",
      cursor: "pointer",
      fontWeight: "500",
    },

    "& .MuiTypography-body1": {
      fontSize: "16px",
      fontWeight: "500",
    },
    "& .MuiListItemText-secondary": {
      fontSize: "14px",
      color: "#b4b4b4",
    },
  },

  //   Right Side Checkout
  radio_showhide: {
    padding: 0,
    borderLeft: "none",
    "& .radiooo_btn": {
      borderBottom: "2px solid #dfdfe3",
      "&:last-child": {
        borderBottom: "none",
      },
    },
    "& .lable": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& .radio_and_lable": {
      display: "flex",
      gap: "8px",
    },
    "& .card_img": {
      display: "flex",
      gap: "5px",
      "& .greenText": {
        color: "#209ca2",
        fontSize: "14px",
        fontWeight: 600,
      },
    },
    "& .labale_and_sublable": {
      display: "flex",
      gap: "10px",
      "& label": {
        display: "block",
        fontSize: "16px",
        color: "#000",
        fontWeight: 600,
      },
      "& .smallLable": {
        display: "block",
        fontSize: "14px",
        color: "#b4b4b4",
        fontWeight: 500,
      },
    },
    "& .content": {
      "& span.sublable": {
        display: "block",
        fontSize: "14px",
        color: "#b4b4b4",
        position: "absolute",
        fontSize: "12px",
        marginTop: "-24px",
        marginLeft: "29px",
      },
    },
  },
  radio_button: {
    // boxShadow: '0 1px 0 0 gray',
    marginBottom: 0,
    padding: "15px",
    "& .lable": {
      display: "flex",
      gap: "10px",
      // marginBottom: '10px',
    },
    "& .content": {
      marginTop: "20px",
      display: "flex",
      gap: "10px",
    },
    "& .active": {
      display: "block",
    },
    "& .none": {
      display: "none",
    },
  },
  form_full: {
    "& .MuiFormControl-root": {
      width: "100%",
      marginBottom: "15px",
    },
  },
  // radio_showhide: {

  // }

  bottom_btn_content: {
    // paddingTop: 50,
    padding: "40px 20px 0px 40px",
    "& .btn_full": {
      width: "100%",
      backgroundColor: "#209ca2",
      height: "45px",
      marginTop: "10px",
      textTransform: 'capitalize'
    },
    "& .title": {
      marginBottom: "0px",
      fontSize: "20px",
    },
    "& .subtitle": {
      color: "#b4b4b4",
      fontSize: "16px",
    },
    "& .footer": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 0 0",
      gap: "10px",
      "& span": {
        color: "#d6d6d8",
        fontSize: "13px",
      },
    },
  },

  // CVC Input
  cvc_input: {
    display: "flex",
    boxShadow: "0px 0 2px 0px grey",
    // marginTop: "20px",
    borderRadius: "5px",

    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInputBase-input": {
      fontSize: "14px",
    },
    "& .MuiInput-root": {
      padding: "5px 10px",
    },
  },
  input_1: {
    width: "47%",
  },
  input_2: {
    width: "27%",
  },
  input_3: {
    width: "25%",
  },
  form_full: {
    "& .MuiFormControl-root": {
      width: "100%",
      marginBottom: "15px",
    },
  },

  form_Logga: {
    "& .btn_full": {
      width: "100%",
      backgroundColor: "#209ca2",
      height: "45px",
      textTransform: 'capitalize'
    },
  },
  input_50per: {
    display: "flex",
    gap: "15px",
  },

  otp_input: {

    "& .green-text": {
      color: "#209ca2",
      margin: "15px 0 0",
      cursor: "pointer",
    },
    "& .MuiOutlinedInput-input": {
      color: "#209ca2",
      margin: "15px 0 0",
      cursor: "pointer",
    },
    // "& .Mui-focused": {
    //   backgroundColor: "#209ca2 !important",
    // },
  },

  "& .dialog_custom_style": {
    "& #alert-dialog-title, .kwekjd": {
      position: "absolute",
    },
  },
  footer_text: {
    display: "flex",
    gap: "15px",
    marginTop: "auto",
    padding: "0 10px",
    "& h5": {
      marginBottom: "0 !important",
      fontSize: "15px",
    },
    "& span": {
      fontSize: "14px",
      color: "#b4b4b4",
    },
  },
  
}));
const CheckoutContent = () => {
  const classes = useStyles();

  const [openCollaps, setOpenCollaps] = React.useState(false);
  const [layout, setLayout] = useState(false);
  const [selected, setSelected] = useState("");

  // let navigate = useNavigate();
  function handleClickNavigate() {
    // navigate("/bookingConfirmed");
  }

  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  console.log("selected__", selected);

  const handleClickCollaps = () => {
    setOpenCollaps(!openCollaps);
  };

  const SportDetailList = (props) => {
    const { image, title, subtitle, option } = props;
    return (
      <Box className="list">
        <img src={image} />
        <div className="title">
          <h5>{title}</h5>
          <span>{subtitle}</span>
          {option}
        </div>
      </Box>
    );
  };

  const isEnabled = 6;

  const RadioButton = (props) => {
    const {
      label,
      smallLable,
      name,
      value,
      content,
      cardsimg,
      lableImg,
      greenText,
    } = props;

    return (
      <Box
        className={`${`radiooo_btn ${classes.radio_button}`} ${
          selected == value ? classes.radio_active : classes.radio_deactive
        }`}
      >
        <Box className="lable">
          <Box className="radio_and_lable">
            <input
              type="radio"
              name={name}
              value={value}
              id={value}
              checked={selected === value}
              onChange={changeHandler}
            />
            <Box className="labale_and_sublable">
              {lableImg && <img src={lableImg} />}
              <div>
                <label htmlFor={value}>{label}</label>
                <span className="smallLable">{smallLable}</span>
              </div>
            </Box>
          </Box>
          <Box htmlFor={value} className="card_img">
            {cardsimg && cardsimg}
            {greenText && <span className="greenText">{greenText}</span>}
          </Box>
        </Box>
        {content && (
          <div className={`content ${selected == value ? "active" : "none"}`}>
            {content}
          </div>
        )}
      </Box>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        {/* Left */}
        <Grid item xs={6} className={classes.left}>
          <Box className={classes.left_body}>
            <Box className={classes.heading}>
              <h3>Översikt av banbokning</h3>
            </Box>
            {/* selected_sport_detail */}
            <Box className={classes.selected_sport_detail}>
              <h3>Collector Bank Arena (GTG)</h3>
              <SportDetailList
                image={Tennis}
                title="Tennis, Bana 2"
                subtitle="(Utomhus, grus)"
              />
              <SportDetailList
                image={calander}
                title="Lör 28 maj, 2022"
                subtitle=""
              />
              <SportDetailList
                image={clock}
                title="16:00 - "
                option={
                  <select>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                  </select>
                }
              />
              <SportDetailList image={credit_card} title="250 kr" subtitle="" />
            </Box>

            {/* Collaps Lägg till spelare */}
            <Box
              className={`${classes.selected_sport_detail} ${classes.collaps_style}`}
            >
              <ListItem button onClick={handleClickCollaps}>
                <ListItemIcon>
                  {/* <PeopleIcon /> */}
                  <img src={users} />
                </ListItemIcon>
                <ListItemText
                  primary="Lägg till spelare"
                  secondary="Dela automatiskt bokningsdetaljer via email"
                />
                {/* {openCollaps ? <ExpandLess /> : <ExpandMore />} */}
                {openCollaps ? <AddIcon /> : <AddIcon />}
              </ListItem>
              <Collapse in={openCollaps} timeout="auto" unmountOnExit>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <CloseIcon className="close_icon" />
                </form>

                <Box className="add_spelare">
                  <AddIcon />
                  Lägg till spelare
                </Box>
              </Collapse>
            </Box>
          </Box>
          <Box className={classes.footer_text}>
            <img src={info} />
            <div>
              <h5>Läs mer om Bokningsvillkor</h5>
              <span>
                Bokningar inom 6 timmar från start är ej återbetalningsbara
              </span>
            </div>
          </Box>
        </Grid>

        {/* Right */}
        <Grid item xs={6} className={classes.right}>
          <Box className={classes.right_body}>
            <Box className={classes.heading}>
              <h3>Checkout</h3>
            </Box>

            {/* <SelectWithIcon
                data={DATA_PRICE}
                placeHolder="Telefonnummer"
                label="1111"
              /> */}
            {/* Layout 1 
          ===============================================================================
          =================================================================================*/}
            {layout == false && (
              <Box className="layout">
                {/* 1. Radio button Collaps Logga in/Skapa konto */}
                <Box
                  className={`${classes.selected_sport_detail} ${classes.radio_showhide}`}
                >
                  <RadioButton
                    label="Logga in/Skapa konto"
                    name="first"
                    value="logga"
                    content={<RadioLoggainContent setLayout={setLayout} />}
                  />
                  <RadioButton
                    label="Fortsätt som gäst"
                    name="first"
                    value="fortsätt"
                    content={
                      <>
                        <form
                          className={`${classes.root} ${classes.form_full} `}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                          />
                          <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                          />
                        </form>
                      </>
                    }
                  />
                </Box>
                {/*2. Radio button Collaps Logga in/Skapa konto */}
                <h4>Betalsätt</h4>
                <Box
                  className={`${classes.selected_sport_detail} ${classes.radio_showhide}`}
                >
                  <RadioButton
                    label="Kort"
                    name="second"
                    value="kort"
                    content={
                      <>
                        <span className="sublable">
                          Lägg till kortuppgifter
                        </span>

                        <form
                          className={`${classes.root}  `}
                          noValidate
                          autoComplete="off"
                        >
                          <Box className={clsx(classes.cvc_input)}>
                            <TextField
                              label=""
                              id="outlined-start-adornment"
                              className={clsx(classes.input_1)}
                              placeholder="Kortnummer"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <img src={credit_card_input} />
                                  </InputAdornment>
                                ),
                              }}
                              // variant="outlined11"
                            />
                            <TextField
                              label=""
                              id="outlined-start-adornment"
                              className={clsx(classes.input_2)}
                              placeholder="MM / YY"
                              pattern="([0-9]{2}[/]?){2}"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <img src={calander_mmyy} />
                                  </InputAdornment>
                                ),
                              }}
                              // variant="outlined11"
                            />
                            <TextField
                              label=""
                              id="outlined-start-adornment"
                              className={clsx(classes.input_3)}
                              placeholder="CVC"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <img src={lock} />
                                  </InputAdornment>
                                ),
                              }}
                              // variant="outlined11"
                            />
                          </Box>
                        </form>
                      </>
                    }
                    cardsimg={
                      <>
                        <img src={visa_card} />
                        <img src={Mastercard} />
                        <img src={AMEX_card} />
                      </>
                    }
                  />
                  <RadioButton
                    label="Swish"
                    name="second"
                    value="swish"
                    content={
                      <>
                        <span className="sublable">
                          Direkt i mobilen med BankID
                        </span>
                        Swish
                      </>
                    }
                    cardsimg={
                      <>
                        <img src={Swish_payment} />
                      </>
                    }
                  />
                </Box>
              </Box>
            )}

            {/* Layout 2 
          =========================================================================
          ============================================================================= */}
            {layout == true && (
              <Box className="layout">
                <Box
                  className={`${classes.selected_sport_detail} ${classes.radio_showhide}`}
                >
                  <RadioButton
                    lableImg={person}
                    label="Inloggad som Andreas Melander"
                    smallLable="andreasmmelander@gmail.com"
                    name="three"
                    value="inloggad"
                    greenText="Redigera"
                  />
                  <RadioButton
                    label="Fortsätt som gäst"
                    name="three"
                    value="fortsätt"
                  />
                </Box>

                {/*2. Radio button Collaps Logga in/Skapa konto */}
                <h4>Betalsätt</h4>
                <Box
                  className={`${classes.selected_sport_detail} ${classes.radio_showhide}`}
                >
                  <RadioButton
                    lableImg={visa_card}
                    label="•••• 9208"
                    name="four"
                    value="kort"
                    greenText="Ändra"
                  />
                  <RadioButton
                    label="Swish"
                    name="four"
                    value="swish"
                    cardsimg={
                      <>
                        <img src={Swish_payment} />
                      </>
                    }
                  />
                </Box>
              </Box>
            )}

            
          </Box>
          <Box className={classes.bottom_btn_content}>
              <Box>
                <h2 className="title">250 kr</h2>
                <span className="subtitle">Att betala (inkl. moms)</span>
              </Box>
              <Link to="/User/Pages/BookingConfirmed/BookingConfirmed/" style={{textDecoration:'none'}}>
              <Button
                className={`${classes.btn_primary} btn_full`}
                  onClick={handleClickNavigate}
                variant="containedPrimary"
                color="primary"
                // autoFocus
                disabled={!isEnabled}
              >
                Slutför bokning
              </Button>
              </Link>
              <Box className="footer">
                <span>Säker betalning med</span> <img src={adyen} />
              </Box>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutContent;
