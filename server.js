const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(' MongoDB Connected'))
    .catch(err => console.error(' MongoDB Connection Error:', err));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/cars', require('./routes/carRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});