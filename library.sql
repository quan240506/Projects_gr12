-- Tạo bảng danh sách Tour
CREATE TABLE tours (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng đăng ký bản tin (Subscribers)
CREATE TABLE subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    signup_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Thêm dữ liệu mẫu
INSERT INTO tours (title, description, price, image_url) 
VALUES ('Tour Hạ Long 2 ngày 1 đêm', 'Khám phá kỳ quan thiên nhiên thế giới', 2500000, 'https://example.com/halong.jpg');
