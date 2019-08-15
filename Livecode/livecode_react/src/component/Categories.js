import React from "react";
import Movies from "../pages/Movies";

// to pass match.params.category props to article component
function Categories({ match }) {
    return (
        <div className="categories-container">
            <Movies genre={match.params.genre} />
        </div>
    );
}

export default Categories;
