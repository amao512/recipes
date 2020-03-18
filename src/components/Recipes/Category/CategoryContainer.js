import React, { useState } from 'react';
import Category from './Category';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeFoodCategory, allFoodCategory } from '../../../redux/foodsReducer';
import { compose } from 'redux';
import s from './category.module.scss';

const CategoryContainer = props => {
    const {changeFoodCategory, match, allFoodCategory} = props;
    const slugId = match.params.slug;

    !slugId ? allFoodCategory() : changeFoodCategory(slugId);

    const [categoryCondition, setCategoryCondition] = useState(false);

    const showCategory = () => setCategoryCondition(true);
    const hideCategory = () => setCategoryCondition(false);

    return (
        <div>
            {categoryCondition && <Category categories={props.categories} setCategoryTitle={props.setCategoryTitle} slugId={slugId}/>}
            
            <div className={s.showHideCategories}>
                <i className='material-icons' onClick={categoryCondition ? hideCategory : showCategory}>
                    {categoryCondition ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </i>
            </div>
        </div>
    )
}

const mstp = state => ({
    categories: state.category.categories
})

export default compose(
    connect(mstp, { changeFoodCategory, allFoodCategory }),
    withRouter
)(CategoryContainer);