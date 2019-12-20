import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";


export default function LocationsList() {
    const[locations, setLocations] = useState([]);
  
    useEffect(() => {
      Axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
          console.log(response.data.results);
          setLocations(response.data.results);
        })
        .catch(error => {
          console.log(error);
        })
    }, []);
  
    return (
      <section className="location-list grid-view">
        {locations.map(location => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </section>
    );
  }
  