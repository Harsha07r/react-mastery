# ❓ FAQ Accordion

A React application that displays a list of frequently asked questions in an accordion layout. This project demonstrates component communication, state management, lifting state up, and controlled components.

---

## 🚀 Concepts Practiced

### ✅ Component Syntax
- Built reusable React components.
- Organized UI into parent and child components.
- Used functional components.

### ✅ Props
- Passed question and answer data from the parent component.
- Passed callback functions as props.
- Followed one-way data flow (Parent → Child).

### ✅ useState
- Managed application state using the `useState` hook.
- Controlled which accordion item is currently open.
- Updated state based on user interactions.

### ✅ Event Handling
- Handled button click events.
- Triggered state updates through callback functions.
- Implemented toggle functionality.

### ✅ Conditional Rendering
- Displayed or hid answers based on component state.
- Used the logical AND (`&&`) operator to conditionally render JSX.
- Dynamically changed button text and icons.

### ✅ List Rendering (`map()`)
- Rendered multiple accordion items using `map()`.
- Assigned unique `key` props for efficient rendering.

### ✅ Lifting State Up
- Moved state from the child component to the parent component.
- Shared state between multiple accordion components.
- Controlled all accordions using a single source of truth.

### ✅ Controlled Components
- Converted the Accordion into a controlled component.
- Received state through props instead of maintaining local state.
- Parent component controlled all UI behavior.

---

## 📂 Project Structure

```text
02-Accordion
│
├── App.jsx
├── components
│   └── Accordion.jsx
└── README.md
```

---

## 🎯 Features

- Display multiple FAQ items.
- Expand and collapse answers.
- Only one accordion remains open at a time.
- Reusable Accordion component.
- Clean parent-child communication using props.

---

## 📖 What I Learned

- Managing state with `useState`.
- Passing data and functions using props.
- Handling user events.
- Rendering lists dynamically with `map()`.
- Using conditional rendering.
- Lifting state up to share data across components.
- Building controlled components.
- Understanding the Single Source of Truth in React.

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CSS

---

## 📌 Key React Concepts

- Functional Components
- JSX
- Props
- Callback Props
- useState
- Event Handling
- Conditional Rendering
- List Rendering (`map`)
- Lifting State Up
- Controlled Components
- Single Source of Truth

---

## 📷 Preview

(Add a screenshot after completing the project.)

```text
📸 Screenshot goes here
```

---

## 🔥 Next Project

➡️ Expense Tracker (Object State, Array State, Forms & Derived State)