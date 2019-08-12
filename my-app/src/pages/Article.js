import React from 'react';
import Header from '../components/Header';
import ArticleContent from '../components/ArticleContent';
import Footer from '../components/Footer';

function Article() {
    return (
        <div className="Article">
            <Header />
            <ArticleContent />
            <Footer />
        </div>
    );
}

export default Article;
