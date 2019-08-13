import React from 'react';
import axios from 'axios';
var url =
    'https://newsapi.org/v2/everything?' +
    'q=animal&' +
    'from=2019-08-13&' +
    'sortBy=popularity&' +
    'apiKey=1d56107880dc48ea9fe059cd7ace11d5';

class ArticleContentTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNews: []
        };
    }
    componentDidMount() {
        const self = this;
        axios
            .get(url)
            .then(function(response) {
                self.setState({ listNews: response.data.articles });
                // handle success
                console.log(response.data.articles);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div className="ArticleContentTwo">
                <div className="card">
                    {this.state.listNews.map((item, index) => {
                        if (index < 1) {
                            return (
                                <div className="card">
                                    <img src={item.urlToImage} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.content.slice(0, 255)}</p>
                                        <a href={item.url} className="btn btn-primary">
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default ArticleContentTwo;
