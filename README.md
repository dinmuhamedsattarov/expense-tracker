```markdown
# 💰 Expense Tracker

A beautiful and intuitive full-stack web application to track your daily expenses built with FastAPI and vanilla JavaScript.

![Expense Tracker](https://img.shields.io/badge/Status-Ready-green)
![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.119.0-green)

## 🚀 Features

- ✅ **Add Expenses** - Simple form to record your spending
- ✅ **View All Expenses** - Beautiful list with categories and dates
- ✅ **Delete Expenses** - One-click removal of entries
- ✅ **Real-time Statistics** - Automatic total spending calculation
- ✅ **Responsive Design** - Works perfectly on desktop and mobile
- ✅ **Category Filtering** - Organize expenses by type (Food, Transport, etc.)

## 🛠️ Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- Responsive Design with CSS Grid/Flexbox
- Modern Glass-morphism UI

**Backend:**
- Python 3.8+
- FastAPI (Modern, fast web framework)
- SQLite (Lightweight database)
- Pydantic (Data validation)

## 🏃‍♂️ Quick Start

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the backend server**
   ```bash
   uvicorn main:app --reload --port 8000
   ```

5. **Open the frontend**
   - Open `index.html` in your web browser
   - Or run: `open index.html` (Mac) / `start index.html` (Windows)

6. **Access your app**
   - **Main App**: `file:///path/to/expense-tracker/index.html`
   - **API Docs**: `http://localhost:8000/docs`

## 🎯 How to Use

1. **Add an Expense**: Fill the form with title, amount, category, and optional description
2. **View Expenses**: See all your expenses in a beautiful, organized list
3. **Track Spending**: Watch the real-time statistics update automatically
4. **Manage Expenses**: Delete any expense with one click

