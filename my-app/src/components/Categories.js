import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Article from '../pages/Article';

// to pass match.params.category props to article component
function Categories({ match }) {
    return (
        <div className="categories-container">
            <Article value={match.params.category} />
        </div>
    );
}

export default Categories;
