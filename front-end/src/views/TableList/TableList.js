import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import avatar from "assets/img/faces/marc.jpg";
import { SocketContext } from 'context/socket';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  const { changeRoom } = useContext(SocketContext);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card profile>
          <CardAvatar profile>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          <CardBody profile>
            <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
            <h4 className={classes.cardTitle}>Alec Thompson</h4>
            <p className={classes.description}>
              Don{"'"}t be scared of the truth because we need to restart the
              human foundation in truth And I love you like Kanye loves Kanye
              I love Rick Owens’ bed design but the back is...
            </p>
            <Button color="primary" round onClick={() => changeRoom(1)}>
              Follow
            </Button>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
