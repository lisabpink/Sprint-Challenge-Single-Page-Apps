import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function CharacterCard({character}) {
  return ( 
    <Card>
    <Image src={character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{character.name}</Card.Header>
      <Card.Meta>{character.species} {character.status}</Card.Meta>
      <Card.Description>Location: {character.location.name}</Card.Description>
      <Card.Description>Origin: {character.origin.name}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link exact to="/episode">
        <Icon name="user" />
        Episodes
      </Link>
    </Card.Content>
  </Card>
  );
}