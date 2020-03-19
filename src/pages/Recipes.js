import React from 'react';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Category from '../components/Category/Category';
import FoodsList from '../components/FoodsList/FoodsList';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleFood from './SingleFood';


const Recipes = ({ foods }) => {
    return (
        <>
            <div className='recipes'>
                <ScrollToTop>
                    <Category />

                    <Switch>
                        <Route exact path='/recipes/:slug?' render={() => <FoodsList />}/>

                        {foods.map(food => (
                            <Route key={food.id}
                                path={'/recipes/' + food.category  + '/food/' + food.slug} 
                                render={() => <SingleFood {...food}/>}/>
                        ))}
                    </Switch>
                </ScrollToTop>
            </div>
        </>
    )
}

const mstp = state => ({ foods: state.foods.food })

export default connect(mstp)(Recipes);