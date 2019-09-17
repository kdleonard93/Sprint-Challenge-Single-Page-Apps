import React from "react";
import styled from "styled-components";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

function LocationCard(props) {
  const { name, type, dimension, residents } = props.location;
  return (
    <Card>
      <CardBody body inverse color="info">
        <CardTitle>
          Planet: {type} {name}
        </CardTitle>
        <CardText>Dimension: {dimension}</CardText>
        <CardText>Population: {residents.length}</CardText>
      </CardBody>
    </Card>
  );
}

export default LocationCard;
