# 💰 Expense Tracker

A modern React-based Expense Tracker application built to practice **React State Management**, **Controlled Forms**, **Array & Object State**, **Component Composition**, and **Derived State**.

This project is the third project in my React learning roadmap and focuses on building a complete CRUD-like application using React fundamentals without any external state management libraries.

---

## 📸 Preview

> *(Add a screenshot or GIF here)*

```
Expense Tracker

-------------------------------
Title:     Pizza
Amount:    250
Category:  Food

[ Add Expense ]
-------------------------------

Expense Summary

Transactions : 3
Total Expense : ₹850

-------------------------------
🍕 Pizza

Amount: ₹250

Category: Food

[ Delete ]
-------------------------------
```

---

# 🚀 Features

- ✅ Add new expenses
- ✅ Delete expenses
- ✅ Form validation
- ✅ Controlled form inputs
- ✅ Dynamic expense list
- ✅ Expense summary
- ✅ Total transaction count
- ✅ Total expense calculation
- ✅ Clean component-based architecture

---

# 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- JSX
- CSS
- Vite

---

# 📂 Project Structure

```
03-ExpenseTracker
│
├── App.jsx
│
├── components
│   ├── ExpenseForm.jsx
│   ├── ExpenseList.jsx
│   └── ExpenseItem.jsx
│
└── README.md
```

---

# 📖 Project Architecture

```
                    App
                     │
     ┌───────────────┴───────────────┐
     │                               │
ExpenseForm                  ExpenseList
                                     │
                                     │
                              ExpenseItem
```

The **App** component is responsible for maintaining the application state, while child components focus only on rendering UI or collecting user input.

---

# ⚙️ React Concepts Covered

## 1. Object State

Instead of creating separate state variables for each form field, a single object is used.

```jsx
const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
});
```

### Benefits

- Cleaner code
- Easier updates
- Related data stays together

---

## 2. Controlled Components

Every input field is controlled by React state.

```jsx
<input
    value={expense.title}
    onChange={handleChange}
/>
```

React becomes the **single source of truth**.

---

## 3. Generic Input Handler

Instead of writing separate handlers for every input, one reusable function updates all fields.

```jsx
const handleChange = (e) => {
    setExpense((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
    }));
};
```

### Concepts Learned

- Computed Property Names
- Spread Operator
- Object State Updates

---

## 4. Form Validation

Before adding an expense, the form checks whether every field has been filled.

```jsx
if (!expense.title.trim() || !expense.amount || !expense.category) {
    alert("Please fill out all fields.");
    return;
}
```

---

## 5. Lifting State Up

The expense list is shared between multiple components.

Instead of storing it inside `ExpenseForm`, it is stored inside `App`.

```
App
│
├── expenses
│
├── ExpenseForm
└── ExpenseList
```

This allows both components to work with the same data.

---

## 6. Callback Props

Child components cannot modify parent state directly.

Instead they communicate using callback props.

```
ExpenseForm

↓

onAddExpense()

↓

App
```

Similarly,

```
ExpenseItem

↓

onDelete()

↓

App
```

This is one of React's most important design patterns.

---

## 7. Array State

Expenses are stored inside an array.

```jsx
const [expenses, setExpenses] = useState([]);
```

New expenses are added immutably.

```jsx
setExpenses((prev) => [
    ...prev,
    newExpense,
]);
```

---

## 8. Rendering Lists

Expenses are displayed dynamically using `map()`.

```jsx
expenses.map((expense) => (
    <ExpenseItem
        key={expense.id}
        expense={expense}
    />
))
```

Each item receives a unique `key` for efficient rendering.

---

## 9. Delete Expense

Expenses are removed using `filter()`.

```jsx
setExpenses((prevExpenses) =>
    prevExpenses.filter((expense) => expense.id !== id)
);
```

### Why `filter()`?

Because React encourages immutable state updates.

Instead of changing the existing array, a brand-new array is created.

---

## 10. Derived State

The application calculates the summary directly from existing state.

### Total Transactions

```jsx
const totalTransactions = expenses.length;
```

### Total Expense

```jsx
const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
);
```

### Why not use `useState`?

Because these values already exist inside `expenses`.

React recommends deriving values whenever possible instead of duplicating state.

---

# 🔄 Data Flow

### Adding an Expense

```
User

↓

ExpenseForm

↓

onAddExpense()

↓

App

↓

expenses[]

↓

ExpenseList

↓

ExpenseItem
```

---

### Deleting an Expense

```
Delete Button

↓

ExpenseItem

↓

ExpenseList

↓

App

↓

filter()

↓

Updated UI
```

---

# 📚 JavaScript Concepts Practiced

- Arrow Functions
- Destructuring
- Objects
- Arrays
- Spread Operator
- Functional Updates
- map()
- filter()
- reduce()
- Computed Property Names

---

# ⚛️ React Concepts Practiced

- Functional Components
- Props
- Component Composition
- useState
- Controlled Components
- Event Handling
- Conditional Rendering
- Lists & Keys
- Callback Props
- Object State
- Array State
- Derived State
- Lifting State Up

---

# 🎯 Learning Outcomes

By building this project, I learned how to:

- Design reusable React components
- Manage object and array state effectively
- Build controlled forms
- Validate user input
- Lift state to the nearest common parent
- Communicate between parent and child components
- Perform immutable state updates
- Render dynamic lists using `map()`
- Delete items using `filter()`
- Compute values using derived state with `reduce()`

---

# 🔮 Future Improvements

- ✏️ Edit existing expenses
- 🔍 Search expenses
- 📂 Filter by category
- 📅 Add expense date
- 💾 Save data using Local Storage
- 🌙 Dark mode
- 📊 Charts and analytics
- 📱 Fully responsive UI

---

# ▶️ Getting Started

Clone the repository:

```bash
git clone https://github.com/<your-username>/react-mastery.git
```

Navigate to the project:

```bash
cd react-mastery
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

# 📌 Project Status

✅ Completed

This project marks the completion of **Phase 2: React State Management** in my React learning roadmap and demonstrates core React patterns used in real-world applications.

---

# 👨‍💻 Author

**Harsha Vardhan**

- GitHub: https://github.com/Harsha07r
- LinkedIn: https://www.linkedin.com/in/alapati-harsha-vardhan-sai/

---

## ⭐ If you found this project helpful, consider giving it a star on GitHub!