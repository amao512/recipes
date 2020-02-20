import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import Header from './Header';
import { withRouter } from 'react-router-dom';

const HeaderContainer = ({ match }) => {

    const [blackHeader, setBlackHeader] = useState(false);
    
    useEffect(() => {
        !match.isExact ? setBlackHeader(true) : setBlackHeader(false);
    }, [match])

    return <Header blackHeader={blackHeader} />
}

export default compose(withRouter)(HeaderContainer);