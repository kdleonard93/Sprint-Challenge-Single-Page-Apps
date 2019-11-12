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
  const Name = styled(CardTitle)`
    font-size: 20px;
  `;

  const Status = styled.h3`
    color: goldenrod;
  `;

  const CharCard = styled(Card)`
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

  return (
    <CharCard>
      <CardBody color="primary">
        <CardImg
          top
          width="100%"
          src={props.image}
          alt="Rick and Morty Character"
        />
        <Name>
          {props.name} <Status>{props.status}</Status>
        </Name>
        <CardText>Species: {props.species}</CardText>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Origin: {props.origin.name}</CardText>
        <CardText>Location: {props.location.name}</CardText>
      </CardBody>
      {/* <Toast>
        <ToastHeader icon="dark">
          <Link to="/episodes" exact>
            Episodes
          </Link>
        </ToastHeader>
      </Toast> */}
    </CharCard>
  );
}
export default CharacterCard;
