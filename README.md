# MentorConnect

MentorConnect is a web application that facilitates mentorship connections between mentors and mentees. The platform aims to create meaningful mentorship relationships by connecting experienced professionals with those seeking guidance.

## Features

- User Authentication
  - Secure login and registration system
  - Separate flows for mentors and mentees
  - Protected routes for authenticated users

- Mentee Features
  - Personalized dashboard
  - Browse and connect with mentors
  - Track mentorship journey

## Tech Stack

- **Frontend**
  - React.js with Vite
  - React Router for navigation
  - Tailwind CSS for styling

- **Backend**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/itsaman22/MentorConnect.git
cd MentorConnect
```

2. Install dependencies for frontend
```bash
npm install
```

3. Install dependencies for backend
```bash
cd server
npm install
```

4. Create a `.env` file in the server directory with:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the backend server
```bash
cd server
npm run dev
```

6. Start the frontend development server
```bash
# In the root directory
npm run dev
```

The application should now be running on:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Project Structure

```
MentorConnect/
├── src/                    # Frontend source files
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── context/          # React context files
│   └── services/         # API services
├── server/               # Backend files
│   ├── routes/          # API routes
│   ├── models/          # Database models
│   └── config/          # Configuration files
└── public/              # Static files
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
