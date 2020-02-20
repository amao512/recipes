import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Recipes from './Recipes';

const RecipesContainer = props => {
    return <Recipes {...props} />
}

const mstp = state => ({
    foods: state.foods.food
})

export default compose(
    connect(mstp),
    withRouter
)(RecipesContainer);