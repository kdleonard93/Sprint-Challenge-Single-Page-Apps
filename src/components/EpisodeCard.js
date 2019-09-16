import React from "react";
import styled from "styled-components";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const EpisodeCard = props => {
  const Title = styled(CardTitle)`
    font-weight: bold;
  `;

  return (
    <div>
      <Card>
        <CardBody
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <Title>{props.episode.name}</Title>
          <CardText>Episode: {props.episode}</CardText>
          <CardText>Air Date: {props.air_date}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default EpisodeCard;
