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

const Status = styled.h3`
  color: goldenrod;
`;

function CharacterCard(props) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={props.characters.image}
        alt="Rick and Morty Character"
      />
      <CardBody body inverse color="primary">
        <CardTitle>
          {props.name} <Status>{props.status}</Status>
        </CardTitle>
        <CardText>Species: {props.species}</CardText>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Origin: {props.origin.name}</CardText>
        <CardText>Location: {props.location.name}</CardText>
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
