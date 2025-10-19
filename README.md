Here's the README code formatted exactly like your URL Shortener project:

```markdown
# Expense Tracker

A full-stack web application for tracking personal expenses built with FastAPI backend and vanilla JavaScript frontend.

## Features

- Add Expenses - Simple form to record daily expenses
- View All Expenses - Clean interface to see spending history  
- Delete Expenses - Remove unwanted entries with one click
- Real-time Statistics - Automatic total spending calculation
- Category Management - Organize expenses by type
- Responsive Design - Works on desktop and mobile devices

## Installation

1. **Clone the repository**
   ```
   git clone https://github.com/dinmuhamedsattarov/expense-tracker.git
   cd expense-tracker
   ```

2. **Create virtual environment**
   ```
   python -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```
   pip install -r requirements.txt
   ```

4. **Run the backend server**
   ```
   uvicorn main:app --reload --port 8000
   ```

5. **Open the frontend**
   - Open `index.html` in your web browser
   - Or run: `open index.html` (Mac)

## Basic Usage

**Add Expenses**
Visit the application and use the form to add new expenses with title, amount, and category.

**View Expenses**  
See all your expenses displayed in an organized list with real-time statistics.

**API Documentation**
Access interactive API docs at: http://localhost:8000/docs

## Project Structure

```
expense-tracker/
├── index.html
├── style.css
├── script.js
├── main.py
├── database.py
├── models.py
├── requirements.txt
└── routers/
    └── expenses.py
```

## API Endpoints

- `GET /expenses/` - Retrieve all expenses
- `POST /expenses/` - Create a new expense  
- `GET /expenses/{id}` - Get specific expense
- `DELETE /expenses/{id}` - Delete an expense
```

