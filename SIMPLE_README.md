# MentorConnect - Simple Implementation

A simplified mentor-student connection platform for final year project demonstration.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- NPM

### Installation & Setup

1. **Clone/Download the project**

2. **Install Frontend Dependencies**
```bash
npm install
```

3. **Install Backend Dependencies**
```bash
cd server
npm install
cd ..
```

4. **Start the Backend Server**
```bash
cd server
npm start
```
The server will run on http://localhost:5000

5. **Start the Frontend (in a new terminal)**
```bash
npm run dev
```
The app will run on http://localhost:5173

## 🎯 Features

### Simple Implementation
- **No Database Required** - Uses in-memory storage
- **Basic Authentication** - Simple email/password login
- **Mentor-Student Matching** - Basic connection system
- **Demo Credentials** - Pre-loaded test accounts

### Demo Accounts
- **Mentor**: mentor@test.com / password123
- **Student**: student@test.com / password123

## 📁 Project Structure

```
├── src/
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── SimpleLoginPage.jsx
│   │   │   └── SimpleRegisterPage.jsx
│   │   ├── Dashboard.jsx
│   │   └── landing/HomePage.jsx
│   ├── context/AuthContext.jsx
│   └── App.jsx
├── server/
│   └── server.js (Complete backend in one file)
└── package.json
```

## 🔧 How It Works

### Backend (server/server.js)
- Express.js server with in-memory data storage
- Simple REST API endpoints:
  - `POST /api/auth/login` - User login
  - `POST /api/auth/register` - User registration
  - `GET /api/mentors` - Get all mentors
  - `POST /api/connect` - Connect student with mentor
  - `GET /api/connections/:userId` - Get user connections

### Frontend
- React with simple routing
- Context-based authentication
- Tailwind CSS for styling
- No complex state management

## 🎓 Perfect for Final Year Projects

This implementation focuses on:
- ✅ **Core Functionality** - Working mentor-student connections
- ✅ **Simple Architecture** - Easy to understand and explain
- ✅ **No Complex Dependencies** - Minimal setup required
- ✅ **Demo Ready** - Pre-loaded with test data
- ✅ **Presentation Friendly** - Clean UI for demonstrations

## 🚦 Usage Flow

1. **Home Page** - Landing page with project overview
2. **Register/Login** - Create account or use demo credentials
3. **Dashboard** - 
   - **Students**: Browse mentors and send connection requests
   - **Mentors**: View incoming mentorship requests
4. **Connections** - Track mentorship relationships

## 🔍 API Endpoints

```
GET    /api/health              - Server health check
POST   /api/auth/login          - User login
POST   /api/auth/register       - User registration
GET    /api/mentors             - Get all mentors
POST   /api/connect             - Create mentor-student connection
GET    /api/connections/:userId - Get connections for user
```

## 🎯 Demonstration Points

When presenting this project, highlight:

1. **Problem Statement**: Connecting students with mentors
2. **Simple Solution**: Web-based platform for easy connections
3. **Technology Stack**: React + Node.js + Express
4. **Core Features**: User auth, mentor browsing, connection requests
5. **User Experience**: Clean, intuitive interface
6. **Data Flow**: Frontend → API → In-memory storage

## 🛠️ Customization

Easy to extend:
- Add more user fields
- Implement chat functionality
- Add mentor categories
- Include rating system
- Connect to real database

## 📝 Notes

- Data resets when server restarts (by design for simplicity)
- No password encryption (suitable for demo purposes)
- CORS enabled for development
- Minimal error handling for cleaner code

Perfect for final year project submissions and demonstrations! 🎓
