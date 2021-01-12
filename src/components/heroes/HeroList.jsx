/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import 'animate.css'

import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './Hero-Card/HeroCard';

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ])

  /* const heroes = getHeroesByPublisher(publisher); */
  return (
    <div className="card-columns animate__animated animate__zoomIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
