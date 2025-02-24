import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import articleRoutes from './routes/articleRoutes.js';

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/articleTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/articles', articleRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});