import React, { lazy, Suspense } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home'));
const Recipes = lazy(() => import('./pages/Recipes'));
const Faq = lazy(() => import('./pages/Faq'));

const App = () => {
  return (
      <div className="App">
          <Suspense fallback={<Loading />}> 
              <Header />
              
              <div className="content">
                  <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route path='/recipes/:slug?' component={ Recipes } />
                    <Route path='/faq' component={ Faq } />
                  </Switch>
              </div>

              <Footer />
          </Suspense>
    </div>
  );
}

export default compose(withRouter)(App);
