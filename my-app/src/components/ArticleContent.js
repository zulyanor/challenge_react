import React from 'react';
import axios from 'axios';
var url = 'https://newsapi.org/v2/top-headlines?' + 'country=id&' + 'apiKey=1d56107880dc48ea9fe059cd7ace11d5';

class ArticleContent extends React.Component {
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
            <div className="ArticleContent">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action list-group-item-primary text-center">
                        Top News Today
                    </li>
                    {this.state.listNews.map((item, index) => {
                        if (index < 10) {
                            return (
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    {item.title.slice(0, 80) + '...'}
                                    <span>
                                        <a href={item.url}>Read more</a>
                                    </span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default ArticleContent;
