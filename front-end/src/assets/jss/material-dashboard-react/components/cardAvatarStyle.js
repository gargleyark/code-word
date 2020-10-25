import { hexToRgb, blackColor } from "assets/jss/material-dashboard-react.js";

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "70%",
      height: "auto",
    }
  },
  cardAvatarProfile: {
    width: "130px",
    height: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarPlain: {}
};

export default cardAvatarStyle;
