/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import { heroes } from '../data/heroes'

export const getHeroesByName = ( name = '' ) => {

    if ( name === '' ) {
        return []
    }
    
    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ))
}