import Article from '../models/articleModel.js';
import axios from 'axios';
import { JSDOM } from 'jsdom';

class ArticleController {
    constructor() {
        this.Article = Article;
    }

    async validateUrl(url) {
        try {
            const response = await axios.get(url);
            return response.status === 200;
        } catch (error) {
            console.error('Error validating URL:', error.message);
            return false;
        }
    }

    async fetchFavicon(url) {
        try {
            const response = await axios.get(url);
            const dom = new JSDOM(response.data);
            const link = dom.window.document.querySelector("link[rel*='icon']");
            if (link) {
                const faviconUrl = new URL(link.href, url).href;
                const faviconResponse = await axios.get(faviconUrl, { responseType: 'arraybuffer' });
                const base64Favicon = Buffer.from(faviconResponse.data, 'binary').toString('base64');
                return `data:${faviconResponse.headers['content-type']};base64,${base64Favicon}`;
            }
            return '';
        } catch (error) {
            console.error('Error fetching favicon:', error.message);
            return '';
        }
    }

    async saveArticle(req, res) {
        try {
            const { title } = req.body;
            console.log('Validating URL:', title); // Add logging
            const isValidUrl = await this.validateUrl(title);
            if (!isValidUrl) {
                console.log('Invalid URL:', title); // Add logging
                return res.status(400).json({ message: 'Invalid URL' });
            }
            const favicon = await this.fetchFavicon(title);
            const article = new this.Article({ title, visitDate: new Date(), favicon });
            await article.save();
            res.status(201).json({ message: 'Article saved successfully' });
        } catch (error) {
            console.error('Error saving article:', error.message);
            res.status(500).json({ message: 'Error saving article', error });
        }
    }

    async getArticles(req, res) {
        try {
            const articles = await this.Article.find();
            res.status(200).json(articles);
        } catch (error) {
            console.error('Error retrieving articles:', error.message);
            res.status(500).json({ message: 'Error retrieving articles', error });
        }
    }

    async getArticleCount(req, res) {
        try {
            const count = await this.Article.countDocuments();
            res.status(200).json({ count });
        } catch (error) {
            console.error('Error retrieving article count:', error.message);
            res.status(500).json({ message: 'Error retrieving article count', error });
        }
    }

    async deleteArticle(req, res) {
        try {
            const { id } = req.params;
            await this.Article.findByIdAndDelete(id);
            res.status(200).json({ message: 'Article deleted successfully' });
        } catch (error) {
            console.error('Error deleting article:', error.message);
            res.status(500).json({ message: 'Error deleting article', error });
        }
    }
}

export default ArticleController;