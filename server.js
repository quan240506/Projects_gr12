const express = require('express');
const { Pool } = require('pg'); // Sử dụng PostgreSQL (phổ biến trên Render)
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});


app.get('/api/tours', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tours');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
    try {
        await pool.query('INSERT INTO subscribers (email) VALUES ($1)', [email]);
        res.status(200).json({ message: 'Đăng ký thành công!' });
    } catch (err) {
        res.status(400).json({ message: 'Email đã tồn tại hoặc lỗi!' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
