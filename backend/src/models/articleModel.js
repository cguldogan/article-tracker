import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    visitDate: {
        type: Date,
        default: Date.now,
    },
    favicon: {
        type: String,
        default: '',
    },
});

const Article = mongoose.model('Article', articleSchema);

export default Article;