import React from 'react';
import axios from 'axios';
var url = 'https://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey=1d56107880dc48ea9fe059cd7ace11d5';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listnews: [],
            username: '',
            isLogin: false
        };
    }
    componentDidMount() {
        const self = this;
        axios
            .get(url)
            .then(function(response) {
                self.setState({ listnews: response.data.articles });
                // handle success
                console.log(response);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return null;
    }
}

export default MyComponent;
