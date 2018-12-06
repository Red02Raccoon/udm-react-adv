import React, { Component } from "react";
import requireAuth from "./requireAuth";

import ImgFeature from "../images/feature.jpg";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class Feature extends Component {
  render() {
    return (
      <Card>
        <CardImg top width="100%" src={ImgFeature} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default requireAuth(Feature);
