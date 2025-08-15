@echo off
echo Starting MentorConnect - Simple Implementation
echo.
echo Starting Backend Server...
start "MentorConnect Server" cmd /k "cd /d %~dp0 && node server/server.js"
timeout /t 3 /nobreak > nul
echo.
echo Starting Frontend Development Server...
start "MentorConnect Frontend" cmd /k "cd /d %~dp0 && npm run dev"
echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Demo Credentials:
echo Mentor: mentor@test.com / password123
echo Student: student@test.com / password123
echo.
pause
