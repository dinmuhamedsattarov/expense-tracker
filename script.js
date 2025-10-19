const API_BASE = 'http://localhost:8000';

// DOM Elements
const expenseForm = document.getElementById('expenseForm');
const expensesList = document.getElementById('expensesList');
const totalAmount = document.getElementById('totalAmount');

// Load expenses when page loads
document.addEventListener('DOMContentLoaded', loadExpenses);

// Handle form submission
expenseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const expenseData = {
        title: document.getElementById('title').value,
        amount: parseFloat(document.getElementById('amount').value),
        category: document.getElementById('category').value,
        description: document.getElementById('description').value
    };

    try {
        const response = await fetch(`${API_BASE}/expenses/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expenseData)
        });

        if (response.ok) {
            // Clear form
            expenseForm.reset();
            // Reload expenses
            loadExpenses();
        } else {
            alert('Error adding expense');
        }
    } catch (error) {
        alert('Error connecting to server');
    }
});

// Load all expenses
async function loadExpenses() {
    try {
        const response = await fetch(`${API_BASE}/expenses/`);
        const expenses = await response.json();
        
        displayExpenses(expenses);
        updateStatistics(expenses);
    } catch (error) {
        expensesList.innerHTML = '<p>Error loading expenses. Make sure the backend server is running.</p>';
    }
}

// Display expenses in the list
function displayExpenses(expenses) {
    if (expenses.length === 0) {
        expensesList.innerHTML = '<p>No expenses yet. Add your first expense above!</p>';
        return;
    }

    expensesList.innerHTML = expenses.map(expense => `
        <div class="expense-item">
            <div class="expense-info">
                <h3>${expense.title}</h3>
                <div class="expense-meta">
                    ${expense.category} • ${new Date(expense.date).toLocaleDateString()}
                    ${expense.description ? `• ${expense.description}` : ''}
                </div>
            </div>
            <div class="expense-right">
                <div class="expense-amount">$${expense.amount.toFixed(2)}</div>
                <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Update statistics
function updateStatistics(expenses) {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Delete an expense
async function deleteExpense(id) {
    if (!confirm('Are you sure you want to delete this expense?')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/expenses/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadExpenses();
        } else {
            alert('Error deleting expense');
        }
    } catch (error) {
        alert('Error connecting to server');
    }
}
