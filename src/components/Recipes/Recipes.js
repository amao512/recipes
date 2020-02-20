import React from 'react';
import FoodsListContainer from './FoodsList/FoodsListContainer';
import { Switch, Route } from 'react-router-dom';
import FoodPage from './FoodPage/FoodPage';
import CategoryContainer from './Category/CategoryContainer';
import s from './recipes.module.scss';


const Recipes = ({ foods }) => {
    return (
        <div className={s.recipes}>
            <CategoryContainer />
            
            <Switch>
                <Route exact path='/recipes/:slug?' render={() => <FoodsListContainer />}/>

                {foods.map(food => (
                    <Route key={food.id} 
                           path={'/recipes/' + food.category  + '/food/' + food.slug} 
                           render={() => <FoodPage {...food}/>}/>
                ))}
            </Switch>
        </div>
    )
}

export default Recipes;