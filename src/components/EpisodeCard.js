import React from "react";
import styled from "styled-components";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const EpisodeCard = props => {
  const { episode, air_date, name } = props.episode;
  const Title = styled(CardTitle)`
    font-weight: bold;
  `;
  console.log(props);
  return (
    <div>
      <Card>
        <CardBody
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <Title>{name}</Title>
          <CardText>Episode: {episode}</CardText>
          <CardText>Air Date: {air_date}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default EpisodeCard;
