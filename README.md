# Expense Tracker

A full-stack web application for tracking personal expenses built with FastAPI backend and vanilla JavaScript frontend.

## Features

- Add expenses with title, amount, and category
- View all expenses in organized list
- Delete unwanted expenses with one click
- Real-time spending statistics
- Responsive design for all devices

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/dinmuhamedsattarov/expense-tracker.git
```

2. **Navigate to project directory**
```bash
cd expense-tracker
```

3. **Create and activate virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

4. **Install dependencies**
```bash
pip install -r requirements.txt
```

5. **Run the backend server**
```bash
uvicorn main:app --reload --port 8000
```

6. **Open the frontend**
```bash
open index.html
```

## Basic Usage

### Track Your Expenses
Open the application and use the form to add your daily expenses with categories and amounts.

## Access Points

- **Main Application**: Open `index.html` in your browser
- **API Documentation**: http://localhost:8000/docs/
- **Raw API Endpoint**: http://localhost:8000/expenses/

