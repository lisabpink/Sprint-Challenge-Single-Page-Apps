import React, {useEffect, useState} from "react";
import Axios from "axios";
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);
  
    useEffect(() => {
      Axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          console.log('episode data:', response.data.results);
          setEpisodes(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return (
      <section className='episode-list grid-view'>
        {episodes.map(episode => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </section>
    );
  }