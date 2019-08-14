import React from 'react';
import Header from '../components/Header';
import ArticleContent from '../components/ArticleContent';
import ArticleContentTwo from '../components/ArticleContentTwo';
import Footer from '../components/Footer';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class Article extends React.Component {
    constructor(props) {
        super(props);
        // state.keyword to keep track of value in search box
        // state.data to store search result
        this.state = { keyword: '', data: [] };
    }

    // method to handle onChange(onChange is a props of input tag in Header component) event (use arrow function so we dont need to bind 'this')
    handleChange = event => {
        event.preventDefault();
        // setState keyword to change the state.keyword value to match the value in search box
        this.setState({ keyword: event.target.value }, () => {
            const self = this;
            axios
                // to get the api with the words from the value
                .get(
                    'https://newsapi.org/v2/everything?q=' +
                        self.state.keyword +
                        '&apiKey=9feafcae305b4d9ca1624bb8e3d2ecb6'
                )
                // response.data.article is the object from the api
                // response is from the argument
                .then(function(response) {
                    self.setState({ data: response.data.articles });
                    console.log(response.data.articles);
                })
                .catch(function(error) {
                    console.log(error);
                });
        });
    };
    // so the api will load before searching (default state)
    componentDidMount() {
        const self = this;
        axios
            .get('https://newsapi.org/v2/everything?' + 'q=animal&' + 'apiKey=9feafcae305b4d9ca1624bb8e3d2ecb6')
            .then(function(response) {
                self.setState({ data: response.data.articles });
                // handle success
                console.log(response.data.articles);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }

    componentDidUpdate = prevProps => {
        // so the api will back to default state after deleting search
        // componentDidMount()
        // const self = this;
        // axios
        //     .get(
        //         'https://newsapi.org/v2/everything?q=' + self.state.keyword + 'apiKey=79eb08ce1ed043efb01f7889808dcfa6'
        //     )
        //     .then(function(response) {
        //         self.setState({ data: response.data.articles });
        //         // handle success
        //         console.log(response.data.articles);
        //     })
        //     .catch(function(error) {
        //         // handle error
        //         console.log(error);
        //     });
        // const {
        //     match: { params }
        // } = this.props;
        if (prevProps.value !== this.props.value) {
            axios
                .get(
                    `https://newsapi.org/v2/everything?category=${
                        this.props.value
                    }&apiKey=9feafcae305b4d9ca1624bb8e3d2ecb6`
                )
                .then(function(response) {
                    this.setState({ data: response.data.articles });
                    // handle success
                    console.log(response.data.articles);
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                });
        }
    };
    render() {
        console.log(this.state.data);
        return (
            <div className="Article">
                {/* props handle to be passed into header component */}
                <Header handle={this.handleChange} />
                <div className="row text-center categories">
                    <div className="col-md-3">
                        <Link to="/Article/sports">
                            <p>Sport</p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/Article/entertainment">
                            <p>Politic</p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/Article/technology">
                            <p>Tech</p>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/Article/usiness">
                            <p>Business</p>
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        {/* props data to be passed into ArticleContent component */}
                        <ArticleContent data={this.state.data} />
                    </div>
                    <div className="col-md-8">
                        <ArticleContentTwo data={this.state.data} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Article;
