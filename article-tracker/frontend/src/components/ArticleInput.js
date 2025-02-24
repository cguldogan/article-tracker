import React, { useState, useEffect } from 'react';

const ArticleInput = ({ onSave, error }) => {
    const [articleTitle, setArticleTitle] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (articleTitle) {
                setIsValid(true);
            } else {
                setIsValid(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [articleTitle]);

    const handleSave = () => {
        if (!isValid) {
            return;
        }
        let url = articleTitle.trim();
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        onSave(url);
        setArticleTitle('');
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                value={articleTitle}
                onChange={(e) => setArticleTitle(e.target.value)}
                placeholder="Enter article URL"
            />
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default ArticleInput;