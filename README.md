# ⚡ AI Code Reviewer – Web App + Chrome Extension

An AI-powered code review tool built as both a **Chrome Extension** and a **React Web App**. Select code anywhere, get instant feedback powered by **OpenAI** — directly in your browser or via a sleek web interface.

---

## 🔍 Features

- 🧩 **Chrome Extension** for code review on any webpage  
- 🌐 **Web App** built with **React + Vite**  
- 🤖 **Node.js + Express** backend for AI code analysis  
- 🔐 Secure integration with **OpenAI API**  
- 🧠 Smart suggestions to improve your code quality  

---

```bash
priyanshuuranjan-ai-code-reviewer/
│
├── README.md               → Project overview
├── LICENSE                 → Open-source license info
│
├── Backend/                → Backend server (Node.js + Express)
│   ├── package.json        → Backend dependencies
│   ├── server.js           → Entry point
│   └── src/
│       ├── app.js          → App config and middleware
│       ├── controllers/
│       │   └── ai.controller.js    → Logic to process AI requests
│       ├── routes/
│       │   └── ai.routes.js        → Route definitions
│       └── services/
│           └── ai.service.js       → Handles OpenAI service logic
│
├── Frontend/               → Web App (React + Vite)
│   ├── index.html          → Main HTML file
│   ├── package.json        → Frontend dependencies
│   ├── vite.config.js      → Vite configuration
│   └── src/
│       ├── App.jsx         → Main App component
│       ├── main.jsx        → Entry point
│       ├── App.css, index.css     → Styles
│       └── assets/         → Images / icons
│
├── Extension/              → Chrome Extension
│   ├── manifest.json       → Extension configuration
│   ├── popup.html          → Extension popup UI
│   ├── popup.js            → Handles popup behavior
│   ├── background.js       → Manages background logic
│   ├── content.js          → Injected script to access code on page
│   └── styles.css          → Extension styling


```
---



---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v18+ recommended)  
- npm or yarn  

---

### 🛠️ Installation

```bash
####  Clone the Repository

git clone https://github.com/priyanshuuranjan/priyanshuuranjan-ai-code-reviewer.git
cd priyanshuuranjan-ai-code-reviewer

```


```bash
🧰 Backend Setup
cd Backend
npm install
npm start
# Runs on http://localhost:5000
```

```bash
🧰 Frontend Setup
cd ../Frontend
npm install
npm run dev
# Runs on http://localhost:5173

```


### Chrome Extension 
Open chrome://extensions/
Enable Developer Mode
Click Load unpacked
Select the Extension/ folder
✅ You're ready to review code anywhere!

🧠 How It Works
You select a code snippet (on any webpage or via the web app)
The selection is sent to the backend server
The backend sends it to OpenAI for analysis
You get clear, helpful feedback instantly

🧰 Tech Stack
Layer	Tech
Frontend	React, Vite, CSS
Backend	Node.js, Express
AI Engine	OpenAI API
Extension	Vanilla JS, Chrome APIs
📃 License
Licensed under the MIT License. See LICENSE for details.
