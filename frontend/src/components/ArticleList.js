import React from 'react';

const ArticleList = ({ articles, onDelete }) => {
    return (
        <div className="mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h2>Articles</h2>
            <ul className="list-group">
                {articles.map((article) => (
                    <li key={article._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="article-info">
                            <div className="d-flex align-items-center">
                                {article.favicon && <img src={article.favicon} alt="favicon" className="favicon mr-2" />}
                                <div>{article.title}</div>
                            </div>
                            <div className="text-muted">{new Date(article.visitDate).toLocaleDateString()}</div>
                        </div>
                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(article._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;