# 🐾 Pet Shop E-Commerce Platform

A full-stack e-commerce application for a pet shop, built with React frontend and Node.js backend. This platform provides a complete shopping experience for pet owners with features like user authentication, product browsing, shopping cart, order management, and payment processing.

## ✨ Features

### 🛍️ E-Commerce Features
- **Product Catalog**: Browse and search through various pet products
- **Product Details**: Detailed product information with images and descriptions
- **Shopping Cart**: Add/remove items and manage quantities
- **Order Management**: Track order history and status
- **Payment Integration**: Secure payment processing
- **Best Sellers**: Featured products section

### 👤 User Management
- **User Registration & Login**: Secure authentication with JWT
- **User Profiles**: Manage personal information and preferences
- **Order History**: View past orders and track current orders

### 🎨 User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modern UI**: Clean and intuitive user interface
- **Product Categories**: Organized by pet types (dogs, cats, birds, fish, rabbits)
- **About Us**: Company information and details
- **Veterinary Services**: Information about veterinary doctors

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - Modern JavaScript library for building user interfaces
- **React Router DOM 7.1.5** - Client-side routing
- **Axios 1.7.9** - HTTP client for API calls
- **React Hot Toast 2.5.2** - Toast notifications
- **React Icons 5.5.0** - Icon library
- **Swiper 11.2.4** - Touch slider component
- **FontAwesome** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.21.2** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.10.1** - MongoDB object modeling
- **JWT 9.0.2** - JSON Web Token authentication
- **bcryptjs 2.4.3** - Password hashing
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 16.4.7** - Environment variables

## 📁 Project Structure

```
pet-shop/
├── Frontend/                 # React application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Layout.jsx   # Main layout component
│   │   │   ├── login.jsx    # Login component
│   │   │   ├── register.jsx # Registration component
│   │   │   ├── mainpage/    # Home page components
│   │   │   ├── page/        # Page components
│   │   │   └── Profile/     # User profile components
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json
├── Backend/                  # Node.js/Express server
│   ├── config/              # Database configuration
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Custom middleware
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── index.js             # Server entry point
│   └── package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pet-shop
   ```

2. **Install backend dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the Backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/database_name
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the backend server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. **Install frontend dependencies**
   ```bash
   cd Frontend
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3000`

## 📖 Usage

### For Users
1. **Register/Login**: Create an account or sign in to access the platform
2. **Browse Products**: Explore the product catalog organized by pet categories
3. **Add to Cart**: Select products and add them to your shopping cart
4. **Checkout**: Review cart items and proceed to payment
5. **Track Orders**: Monitor order status and view order history
6. **Manage Profile**: Update personal information and preferences

### For Developers
- **API Documentation**: All endpoints are RESTful and follow standard conventions
- **Authentication**: JWT-based authentication for protected routes
- **Database**: MongoDB with Mongoose ODM for data modeling
- **State Management**: React hooks for local state management

## 🔧 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Products
- `GET /api/product` - Get all products
- `GET /api/product/:id` - Get product by ID
- `GET /api/bestsellers` - Get bestseller products

### Cart & Orders
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove cart item
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Reviews
- `GET /api/reviews` - Get product reviews
- `POST /api/reviews` - Add product review

## 🎯 Key Features Implementation

### Authentication System
- Secure user registration and login
- JWT token-based authentication
- Protected routes for authenticated users
- Password hashing with bcryptjs

### Shopping Cart
- Persistent cart functionality
- Add/remove items
- Quantity management
- Cart total calculation

### Order Management
- Complete order workflow
- Order status tracking
- Order history
- Payment integration

### Product Management
- Product catalog with categories
- Product search and filtering
- Product reviews and ratings
- Best sellers section

## 🚀 Deployment

### Frontend Deployment
The frontend is configured for GitHub Pages deployment:
```bash
cd Frontend
npm run deploy
```

### Backend Deployment
The backend can be deployed to platforms like:
- Heroku
- Railway
- Render
- DigitalOcean

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community for the robust backend framework
- MongoDB for the flexible database solution
- All contributors and users of this project

---

⭐ If you find this project helpful, please give it a star! 