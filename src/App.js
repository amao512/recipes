import React, { lazy, Suspense } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Loading from './components/common/Loading';

const MainPage = lazy(() => import('./components/MainPage/MainPage'));
const RecipesContainer = lazy(() => import('./components/Recipes/RecipesContainer'));

const App = () => {
  return (
      <div className="App">
          <Suspense fallback={<Loading />}> 
              <HeaderContainer />

              <div className="content">
                  <Switch>
                    <Route exact path='/' component={ MainPage } />
                    <Route path='/recipes/:slug?' component={ RecipesContainer } />
                  </Switch>
              </div>

              <Footer />
          </Suspense>
    </div>
  );
}



export default compose(withRouter)(App);
