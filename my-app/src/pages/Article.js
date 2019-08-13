import React from 'react';
import Header from '../components/Header';
import ArticleContent from '../components/ArticleContent';
import ArticleContentTwo from '../components/ArticleContentTwo';
import Footer from '../components/Footer';

function Article() {
    return (
        <div className="Article">
            <Header />
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <ArticleContent />
                </div>
                <div className="col-md-8">
                    <ArticleContentTwo />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Article;
