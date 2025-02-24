import React from 'react';

const ArticleCounter = ({ count }) => {
    return (
        <h2 className="mt-4">Total Articles Read: {count}</h2>
    );
};

export default ArticleCounter;