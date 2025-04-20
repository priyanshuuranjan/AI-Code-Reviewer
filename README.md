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

## 📁 Project Structure
priyanshuuranjan-ai-code-reviewer/
├── Backend/ → Node.js + Express server
│ ├── src/ → app logic, routes, controllers
├── Frontend/ → React + Vite Web UI
├── Extension/ → Chrome Extension (popup, content, background)
├── LICENSE
└── README.md


---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v18+ recommended)  
- npm or yarn  

---

### 🛠️ Installation

1. **Clone the Repo**
```bash
git clone https://github.com/priyanshuuranjan/priyanshuuranjan-ai-code-reviewer.git
cd priyanshuuranjan-ai-code-reviewer
Backend Setup
bash
Copy code
cd Backend
npm install
npm start
# Runs on http://localhost:5000
Frontend Setup
bash
Copy code
cd ../Frontend
npm install
npm run dev
# Runs on http://localhost:5173
Chrome Extension
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
