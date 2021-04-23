import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//https://ih-beers-api2.herokuapp.com/beers

const Allbeers = () => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers ').then((res) => {
      setBeer(res.data);
    });
  }, []);
  const showBeers = () => {
    return beer.map((beer, i) => {
      return (
        <div>
          <div>
            <Link to={`/beer/${beer._id}`}>
              <img src={beer.image_url} />
            </Link>
          </div>
          <div></div>
        </div>
      );
    });
  };

  return (
    <div>
      Cody is cool!!
      {showBeers()}
      gi{' '}
    </div>
  );
};

export default Allbeers;
