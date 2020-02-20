import React from 'react';
import FoodsList from './FoodsList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const FoodsListContainer = props => {
    const {categories, match} = props
    const categoryTitle = categories.map(c => c.slug === match.params.slug && c.title)

    return <FoodsList {...props} categoryTitle={categoryTitle} />
}

const mstp = state => ({
    foods: state.foods.food,
    categories: state.category.categories,
})

export default compose(connect(mstp), withRouter)(FoodsListContainer);