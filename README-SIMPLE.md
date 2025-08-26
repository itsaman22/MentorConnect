# MentorConnect - Simplified Version

A simple and clean mentor-mentee platform built for final year project.

## 🎯 Project Overview

MentorConnect is a web application that connects mentors with mentees. This simplified version focuses on:
- Clean, understandable code
- Basic authentication
- Simple user management
- Easy deployment

## 🏗️ Architecture

### Backend (Node.js + Express)
- **File**: `server/simple-server.js`
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Password**: Bcrypt hashing

### Frontend (React)
- **Framework**: React with Vite
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **State**: Simple useState (no complex state management)

## 📁 File Structure

```
server/
├── simple-server.js          # Main server file (all routes)
├── package-simple.json       # Dependencies
└── vercel-simple.json       # Deployment config

src/
├── SimpleApp.jsx             # Main app component
├── services/
│   └── simple-api.js         # API calls
└── pages/
    ├── auth/
    │   ├── SimpleLoginPage.jsx
    │   └── SimpleRegisterPage.jsx
    └── mentee/
        └── SimpleMenteeHome.jsx
```

## 🚀 Features

### Authentication
- User registration (mentor/mentee)
- User login
- JWT token-based auth
- Auto logout on invalid token

### User Management
- Profile display
- User type (mentor/mentee)
- Protected routes

## 💻 How to Run

### Backend
```bash
cd server
npm install
npm start
```

### Frontend
```bash
npm install
npm run dev
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| GET | `/api/health` | Health check |

## 📊 Database Schema

### User Model
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  userType: String (mentor/mentee),
  createdAt: Date
}
```

## 🎓 Interview Points

### Technical Concepts Demonstrated
1. **RESTful API Design**
2. **JWT Authentication**
3. **Password Hashing (bcrypt)**
4. **MongoDB Integration**
5. **React Hooks (useState, useEffect)**
6. **Protected Routes**
7. **Error Handling**
8. **Responsive Design**

### Key Features to Highlight
- Secure authentication flow
- Clean separation of concerns
- Simple but effective UI/UX
- Scalable code structure
- Environment-based configuration

## 🚢 Deployment

### Backend (Vercel)
- Use `vercel-simple.json` config
- Set environment variables for MongoDB

### Frontend (Vercel/Netlify)
- Build with `npm run build`
- Set API URL environment variable

## 🔒 Security Features
- Password hashing with bcrypt
- JWT token expiration
- Input validation
- CORS configuration
- Protected API routes

## 📝 Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Frontend (.env)
```
VITE_API_URL=your_backend_url
```

## 🎯 Next Steps (Future Enhancements)
- Mentor-mentee matching
- Messaging system
- Session scheduling
- Profile pictures
- Reviews and ratings

This simplified version gives you a solid foundation while keeping the code easy to understand and explain in interviews!
