import React from "react";
import Header from "../component/Header";
import axios from "axios";
import { Content } from "../component/Content";

class Movies extends React.Component {
    constructor(props) {
        super(props);
        // state.data to store get result
        this.state = { data: [], genre: this.props.genre };
    }
    componentWillMount() {
        const self = this;
        axios
            .get("https://api-todofancy.herokuapp.com/api/movies ")
            .then(function(response) {
                self.setState({ data: response.data.movies });
                // handle success
                console.log("respons api movie", response.data.movies);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div className="movie-content">
                <Header />
                <Content data={this.state.data} genre={this.state.genre} />
            </div>
        );
    }
}

export default Movies;
