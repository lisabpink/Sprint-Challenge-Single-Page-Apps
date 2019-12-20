import React from "react";
import {Card} from "semantic-ui-react";

export default function LocationCard({location}) {
  return ( 
    <Card>
      <Card.Content>
        <Card.Header>{location.name}</Card.Header>
        <Card.Meta>{location.type}</Card.Meta>
        <Card.Description>{location.dimension}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {location.residents.length} residents
      </Card.Content>
    </Card>
  );
}