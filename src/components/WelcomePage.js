import React from "react";
import { Image, Reveal } from "semantic-ui-react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Reveal animated="rotate">
          <Reveal.Content visible>
            <Image
              className="main-img ui "
              circular
              size="large"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              circular
              size="large"
              src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            />
          </Reveal.Content>
        </Reveal>
      </header>
    </section>
  );
}
