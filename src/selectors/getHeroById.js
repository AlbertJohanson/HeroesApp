/* eslint-disable import/prefer-default-export */
import { heroes } from "../data/heroes";

export const getHeroesById = (id) => {

    return heroes.find( hero => hero.id === id)
}