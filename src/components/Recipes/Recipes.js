import React from 'react';
import FoodsListContainer from './FoodsList/FoodsListContainer';
import { Switch, Route } from 'react-router-dom';
import FoodPage from './FoodPage/FoodPage';
import CategoryContainer from './Category/CategoryContainer';
import s from './recipes.module.scss';
import ScrollToTop from '../common/ScrollToTop/ScrollToTop';


const Recipes = ({ foods }) => {
    return (
        <div className={s.recipes}>
            <ScrollToTop>
                <CategoryContainer />
                
                <Switch>
                    <Route exact path='/recipes/:slug?' render={() => <FoodsListContainer />}/>

                    {foods.map(food => (
                        <Route key={food.id}
                               path={'/recipes/' + food.category  + '/food/' + food.slug} 
                               render={() => <FoodPage {...food.fields}/>}/>
                    ))}
                </Switch>
            </ScrollToTop>
        </div>
    )
}

export default Recipes;