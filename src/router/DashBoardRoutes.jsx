/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

/* Components */
import { Navbar } from '../components/ui/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashBoardRoutes = () => {
    return (
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/marvel" component={MarvelScreen} />
            <Route exact path="/dc" component={DcScreen} />
            <Route exact path="/hero/:heroeId" component={HeroScreen} />
            <Route path="/search" component={SearchScreen} />

            <Redirect to="/marvel" />
          </Switch>
        </div>
      </>
    );
}
