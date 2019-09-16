import React from "react";
import styled from "styled-components";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <CardBody body inverse color="info">
        <CardTitle>Planet: {props.location.name}</CardTitle>
        <CardText>Dimension: {props.location.dimension}</CardText>
        <CardText>Population: {props.location.residents.length}</CardText>
      </CardBody>
    </Card>
  );
}

export default LocationCard;
