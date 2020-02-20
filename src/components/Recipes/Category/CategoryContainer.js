import React from 'react';
import Category from './Category';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeFoodCategory, allFoodCategory } from '../../../redux/foodsReducer';
import { compose } from 'redux';

const CategoryContainer = props => {
    const {changeFoodCategory, match, allFoodCategory} = props;
    const slugId = match.params.slug;

    !slugId ? allFoodCategory() : changeFoodCategory(slugId);

    return <Category categories={props.categories} setCategoryTitle={props.setCategoryTitle} slugId={slugId}/>
}

const mstp = state => ({
    categories: state.category.categories
})

export default compose(
    connect(mstp, { changeFoodCategory, allFoodCategory }),
    withRouter
)(CategoryContainer);