# 🍽️ Restaurant Menu

A simple React application that displays a restaurant menu using reusable components. This project focuses on React fundamentals such as components, props, list rendering, conditional rendering, and basic state management.

---

## 🚀 Concepts Practiced

### ✅ Component Syntax
- Created reusable React components.
- Split the UI into smaller, maintainable components.
- Used functional components.
- Passed data between components.

### ✅ Props
- Passed menu item data from the parent component to child components.
- Rendered dynamic content using props.
- Followed one-way data flow (Parent → Child).

### ✅ List Rendering (`map()`)
- Rendered multiple menu items using the `map()` method.
- Assigned unique `key` props to each component.
- Avoided repetitive JSX by generating components dynamically.

### ✅ Conditional Rendering
- Displayed different UI based on whether the food item is vegetarian or non-vegetarian.
- Used logical AND (`&&`) and ternary operators for conditional rendering.

### ✅ useState
- Managed component state using the `useState` hook.
- Implemented show/hide functionality for menu details.
- Triggered UI updates through state changes.

---

## 📂 Project Structure

```text
01-RestaurantMenu
│
├── App.jsx
├── components
│   └── MenuCard.jsx
├── assets
│   ├── ChickenBurger.jpg
│   ├── ChickenMeal.webp
│   ├── ChickenPizza.jpg
│   ├── VegPizza.jpg
│   └── VegSandwich.webp
└── README.md
```

---

## 🎯 Features

- Display restaurant menu items.
- Reusable `MenuCard` component.
- Dynamic rendering using `map()`.
- Vegetarian / Non-Vegetarian indicator.
- Show/Hide item details using React state.
- Clean component-based architecture.

---

## 📖 What I Learned

- How to split a UI into reusable React components.
- Passing data through props.
- Rendering lists using `map()`.
- Using conditional rendering to display different UI.
- Managing local component state with `useState`.
- Thinking in terms of component hierarchy and data flow.

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
- Component Composition
- State (`useState`)
- Event Handling
- Conditional Rendering
- List Rendering (`map`)
- One-Way Data Flow

---

## 📷 Preview

(Add a screenshot here after completing the project.)

```
![Restaurant Menu](./screenshot.png)
```

---
## Commit

```bash
git commit -m "Build Restaurant Menu using props, map, conditional rendering and useState"

## 🔥 Next Project

➡️ FAQ Accordion (Lifting State Up & State Management)