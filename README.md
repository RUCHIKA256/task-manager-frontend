# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 README — Frontend Repository  
(`task-manager-frontend`)


#  Task Manager Frontend (React + Vite)

This is the frontend for the Task Manager application.  
Built using React and Vite with Tailwind CSS.

---

##  Features

- View all tasks
- Create new tasks
- Edit tasks
- Delete tasks
- Filter by category
- Clean dashboard UI

---

##  Tech Stack

- React
- Vite
- Tailwind CSS
- Axios

---

##  Project Structure

frontend/
│
├── src/
│ ├── components/
│ ├── services/
│ ├── App.jsx
│ └── main.jsx
├── package.json
├── vite.config.js


---

## Setup Instructions

###  Clone the repository


1 git clone https://github.com/YOUR_USERNAME/task-manager-frontend.git
cd task-manager-frontend
2️ Install dependencies
npm install
3️ Configure API Base URL
Inside:


src/services/api.js

Set backend URL:

http://127.0.0.1:8000/api/
For production, replace with deployed backend URL.

4️ Run development server
npm run dev
App will run at:

http://localhost:5173/
🔗 Backend Repository
Make sure backend is running before starting frontend.







