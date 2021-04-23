import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetails(props) {
  console.log(props);

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.poopy}`
      )
      .then((res) => {
        setBeer(res.data);
      });
  }, []);
  console.log(beer);

  return (
    <div>
      <img src={beer.image_url} />
    </div>
  );
}

export default BeerDetails;
