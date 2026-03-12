@echo off
echo Starting Mount Zion College of Nursing site...
cd frontend
if not exist node_modules (
    echo Installing dependencies...
    call npm install
)
echo Starting development server...
start http://localhost:5173
call npm run dev
