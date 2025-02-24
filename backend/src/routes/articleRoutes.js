import express from 'express';
import ArticleController from '../controllers/articleController.js';

const router = express.Router();
const articleController = new ArticleController();

router.post('/', articleController.saveArticle.bind(articleController));
router.get('/', articleController.getArticles.bind(articleController));
router.get('/count', articleController.getArticleCount.bind(articleController));
router.delete('/:id', articleController.deleteArticle.bind(articleController));

export default router;