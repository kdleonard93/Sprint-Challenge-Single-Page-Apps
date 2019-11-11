import React from "react";
import styled from "styled-components";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const LocalCard = styled(Card)`
  margin: 30px 20px 0 20px;
  border: 1px solid black;
  border-radius: 10px;
  height: 350px;
  width: 350px;
  background-color: rgba(255, 250, 250, 0.8);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in;
  &:hover {
    color: white;
    background-color: black;
  }
`;

function LocationCard(props) {
  const { name, type, dimension, residents } = props.location;
  return (
    <LocalCard>
      <CardText>{name}</CardText>
      <CardText>{type}</CardText>
      <CardText>{dimension}</CardText>
      <CardText>{residents}</CardText>
    </LocalCard>
  );
}

export default LocationCard;
