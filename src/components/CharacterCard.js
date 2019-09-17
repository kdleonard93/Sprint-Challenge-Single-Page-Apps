import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Toast,
  ToastHeader
} from "reactstrap";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  const Status = styled.h3`
    color: goldenrod;
  `;

  const {
    image,
    name,
    status,
    species,
    gender,
    origin,
    location
  } = props.character;

  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Rick and Morty Character" />
      <CardBody body inverse color="primary">
        <CardTitle>
          {name} <Status>{status}</Status>
        </CardTitle>
        <CardText>Species: {species}</CardText>
        <CardText>Gender: {gender}</CardText>
        <CardText>Origin: {origin.name}</CardText>
        <CardText>Location: {location.name}</CardText>
      </CardBody>
      <Toast>
        <ToastHeader icon="dark">
          <Link to="/episodes" exact>
            Episodes
          </Link>
        </ToastHeader>
      </Toast>
    </Card>
  );
}

export default CharacterCard;
