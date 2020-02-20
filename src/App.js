import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import HeaderContainer from './components/Header/HeaderContainer';
import RecipesContainer from './components/Recipes/RecipesContainer';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
      <div className="App">
        <HeaderContainer />

        <div className="content">
          <Switch>
            <Route exact path='/' render={() => <BackgroundImage />} />
            <Route path='/recipes/:slug?' render={() => <RecipesContainer />} />
          </Switch>
        </div>

        <Footer />
    </div>
  );
}



export default compose(withRouter)(App);
