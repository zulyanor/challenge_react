import React from "react";

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    checkRomance = obj => {
        return obj.Category === this.props.genre;
    };
    render() {
        console.log("data dr movies", this.props.data);
        console.log("genre", this.props.genre);
        const data_filter = this.props.data.filter(this.checkRomance);
        console.log(data_filter);
        return (
            <div className="container Content">
                {/* call props.data from props stated in Article.js earlier */}
                {data_filter.map((item, index) => {
                    return (
                        <div className="row list_movies">
                            <div className="col-md-4">
                                <img src={item.Poster} height="383px" />
                            </div>
                            <div className="col-md-6 movie_desc">
                                {item.Title}
                                <br />
                                {item.Year}
                                <br />
                                {item.Synopsis}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
