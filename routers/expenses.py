from fastapi import APIRouter, HTTPException
from database import get_db_connection
from models import Expense, ExpenseCreate
from datetime import datetime

router = APIRouter()

@router.post("/expenses/", response_model=Expense)
def create_expense(expense: ExpenseCreate):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO expenses (title, amount, category, description, date)
        VALUES (?, ?, ?, ?, ?)
    ''', (expense.title, expense.amount, expense.category, expense.description, datetime.now()))
    
    expense_id = cursor.lastrowid
    conn.commit()
    
    # Fetch the created expense
    cursor.execute('SELECT * FROM expenses WHERE id = ?', (expense_id,))
    expense_data = cursor.fetchone()
    conn.close()
    
    return dict(expense_data)

@router.get("/expenses/", response_model=list[Expense])
def read_expenses():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM expenses ORDER BY date DESC')
    expenses = cursor.fetchall()
    conn.close()
    return [dict(expense) for expense in expenses]

@router.get("/expenses/{expense_id}", response_model=Expense)
def read_expense(expense_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM expenses WHERE id = ?', (expense_id,))
    expense = cursor.fetchone()
    conn.close()
    
    if expense is None:
        raise HTTPException(status_code=404, detail="Expense not found")
    
    return dict(expense)

@router.delete("/expenses/{expense_id}")
def delete_expense(expense_id: int):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('DELETE FROM expenses WHERE id = ?', (expense_id,))
    conn.commit()
    
    if cursor.rowcount == 0:
        conn.close()
        raise HTTPException(status_code=404, detail="Expense not found")
    
    conn.close()
    return {"message": "Expense deleted successfully"}
