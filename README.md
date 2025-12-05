# React Todo Manager App

A simple, interactive Todo Management Application built using React, featuring add, edit, delete, and complete functionality. The todos are also saved in the browser's local storage so that data persists even after refreshing the page.

# preview

<img width="811" height="394" alt="Screenshot 2025-12-06 at 1 27 23 AM" src="https://github.com/user-attachments/assets/6c5dc80a-6696-4293-b6e2-42fb3e33e6fd" />

# 🚀 Features

  - ✔ Add a new todo
  - ✔ Edit existing todos
  - ✔ Delete todos
  - ✔ Mark todos as completed
  - ✔ Visual highlighting of completed items
  - ✔ Local storage persistence
  - ✔ Context-based state management
- ✔ Responsive UI


# 🛠 Tech Stack

  - React
  - Context API
  - Local Storage
  - Tailwind CSS
    

# 📂 Project Structure
```
  src/
  │
  ├── components/
  │   ├── TodoForm.jsx
  │   └── TodoItem.jsx
  │
  ├── contexts/
  │   └── index.js
  │
  ├── App.jsx
  └── App.css
```


# 🎯 How It Works

## State & Data Flow

  - Todos are stored in a todos state using useState
  - CRUD functions update local state:

    - addTodo()
    - updateTodo()
    - deleteTodo()
    - toggleTodoCompletion()
  
  - Local storage updates whenever state changes
  - Context API exposes todos and functions to all components

# 📌 Installation & Setup

  Clone the repository:

    git clone <repository-url>


  Navigate into the project folder:

    cd todo-manager


  Install dependencies:

    npm install


  Run the project:

    npm run dev


  Open the app in browser:

    👉 http://localhost:5173

# 🧩 Core Functionalities Summary

Creating Todos

  Just type something and press Add.

Editing Todos

  Click ✏️ icon → modify text → click 📁 to save.

Marking Completed

  Checkbox toggles completion.

  Completed items turn green 💚.

Deleting Todos

  Press ❌ to remove instantly.
  

# 🧠 Context Object Structure
```
  {
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleTodoCompletion: (id) => {}
  }
```


# 🖼 UI Preview (describe)

  - Purple background
  - Tasks in colored cards
  - Buttons for edit & delete
  - Line-through effect for completed tasks



