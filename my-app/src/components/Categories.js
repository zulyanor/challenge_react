import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Article from '../pages/Article';

function Categories({ match }) {
    return (
        <div className="categories-container">
            <Article value={match.params.category} />
        </div>
    );
}

export default Categories;
