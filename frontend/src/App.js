import React, { useState, useEffect, useCallback } from 'react';
import ArticleInput from './components/ArticleInput';
import ArticleCounter from './components/ArticleCounter';
import ArticleList from './components/ArticleList';
import DateSelector from './components/DateSelector';
import './App.css';

const App = () => {
    const [articleCount, setArticleCount] = useState(0);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');
    const [filterDate, setFilterDate] = useState(new Date().toISOString().split('T')[0]); // Set initial state to today's date
    const apiUrl = process.env.REACT_APP_API_URL;

    const fetchArticles = useCallback(async () => {
        const response = await fetch(`${apiUrl}/api/articles`);
        const data = await response.json();
        setArticles(data);
        setArticleCount(data.length);
    }, [apiUrl]);

    const fetchArticlesByDate = useCallback(async (date) => {
        const response = await fetch(`${apiUrl}/api/articles/by-date?date=${date}`);
        const data = await response.json();
        setArticles(data);
    }, [apiUrl]);

    const handleArticleSave = async (articleTitle) => {
        try {
            const response = await fetch(`${apiUrl}/api/articles`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: articleTitle }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message);
                return;
            }

            setError('');
            fetchArticlesByDate(filterDate); // Fetch articles for the current filter date
        } catch (error) {
            setError('An error occurred while saving the article.');
        }
    };

    const handleArticleDelete = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/api/articles/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message);
                return;
            }

            setError('');
            fetchArticlesByDate(filterDate); // Fetch articles for the current filter date
        } catch (error) {
            setError('An error occurred while deleting the article.');
        }
    };

    useEffect(() => {
        if (filterDate) {
            fetchArticlesByDate(filterDate);
        } else {
            fetchArticles();
        }
    }, [fetchArticles, fetchArticlesByDate, filterDate]);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <h1 className="mb-4">Article Tracker</h1>
            <ArticleInput onSave={handleArticleSave} error={error} />
            <DateSelector selectedDate={filterDate} onDateChange={setFilterDate} />
            <ArticleCounter count={articleCount} />
            <ArticleList articles={articles} onDelete={handleArticleDelete} />
        </div>
    );
};

export default App;