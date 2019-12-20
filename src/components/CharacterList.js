import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
}, []);

return (
  <section className="character-list grid-view">
    {characters.map(character => {
      return <CharacterCard key={character.id} character={character} />;
    })}
  </section>
);
}
