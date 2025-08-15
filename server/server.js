import express from 'express';
import cors from 'cors';

const app = express();

// Simple CORS setup - allow all origins for development
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

// Simple in-memory data storage (no database needed for simplicity)
let users = [
  {
    id: 1,
    email: 'mentor@test.com',
    password: 'password123',
    name: 'John Mentor',
    role: 'mentor',
    skills: ['JavaScript', 'React', 'Node.js'],
    experience: '5 years',
    bio: 'Experienced full-stack developer'
  },
  {
    id: 2,
    email: 'student@test.com',
    password: 'password123',
    name: 'Jane Student',
    role: 'mentee',
    interests: ['Web Development', 'Programming'],
    level: 'Beginner'
  }
];

let mentorships = [];

// Simple authentication routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    // eslint-disable-next-line no-unused-vars
    const { password: userPassword, ...userWithoutPassword } = user;
    res.json({
      success: true,
      user: userWithoutPassword,
      token: `simple_token_${user.id}` // Simple token for demo
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/auth/register', (req, res) => {
  const { email, password, name, role } = req.body;
  
  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }
  
  const newUser = {
    id: users.length + 1,
    email,
    password,
    name,
    role,
    ...(role === 'mentor' ? { skills: [], experience: '', bio: '' } : { interests: [], level: '' })
  };
  
  users.push(newUser);
  
  // eslint-disable-next-line no-unused-vars
  const { password: userPassword, ...userWithoutPassword } = newUser;
  res.json({
    success: true,
    user: userWithoutPassword,
    token: `simple_token_${newUser.id}`
  });
});

// Get all mentors
app.get('/api/mentors', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const mentors = users.filter(user => user.role === 'mentor').map(({ password, ...user }) => user);
  res.json(mentors);
});

// Connect with mentor
app.post('/api/connect', (req, res) => {
  const { mentorId, menteeId, message } = req.body;
  
  const connection = {
    id: mentorships.length + 1,
    mentorId: parseInt(mentorId),
    menteeId: parseInt(menteeId),
    message,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  mentorships.push(connection);
  res.json({ success: true, connection });
});

// Get connections for a user
app.get('/api/connections/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userConnections = mentorships.filter(
    conn => conn.mentorId === userId || conn.menteeId === userId
  );
  
  // Add user details to connections
  const connectionsWithDetails = userConnections.map(conn => {
    const mentor = users.find(u => u.id === conn.mentorId);
    const mentee = users.find(u => u.id === conn.menteeId);
    return {
      ...conn,
      mentor: mentor ? { id: mentor.id, name: mentor.name, email: mentor.email } : null,
      mentee: mentee ? { id: mentee.id, name: mentee.name, email: mentee.email } : null
    };
  });
  
  res.json(connectionsWithDetails);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Simple MentorConnect Server running on port ${PORT}`);
  console.log('📝 Demo credentials:');
  console.log('   Mentor: mentor@test.com / password123');
  console.log('   Student: student@test.com / password123');
});