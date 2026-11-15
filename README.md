# 🌍 Accessible World

**Accessible World** is a collaborative team project designed to map, review, and report accessible locations, empowering individuals with mobility or accessibility needs to navigate their environments more confidently.

---

## 🚀 Features

* **Interactive Location Discovery:** Browse and search for accessible locations with detailed breakdown notes.
* **User Authentication:** Secure user registration, login, and profile management.
* **Crowdsourced Reporting:** Users can submit and track accessibility reports/issues.
* **Admin Dashboard:** Administrative controls to monitor, manage, and verify user reports.

---

## 🛠️ Tech Stack

### **Frontend**
* **HTML5 / CSS3** (Responsive design with custom styling for profiles and dashboards)
* **JavaScript (ES6+)** (Dynamic UI interactions, API integration, and authentication handlers)

### **Backend**
* **FastAPI** (Modern, high-performance Python web framework)
* **Uvicorn** (ASGI server)
* **Database Drivers & ORM/Connectors:** `oracledb`, `psycopg2-binary`, `python-dotenv`
* **Security:** `PyJWT` for token-based authentication

---

## 📁 Project Structure

```text
accessible-world-main/
│
├── admin.html               # Admin control panel UI
├── index.html               # Main landing/map page
├── login.html               # User login interface
├── register.html            # User registration interface
├── profile.html             # User profile management UI
├── my-reports.html          # User report tracking interface
├── location-details.html    # Specific location detail view
│
├── backend/
│   ├── main.py              # FastAPI application entry point
│   ├── database.py          # Database connection and configuration
│   └── requirements.txt     # Python dependencies
│
├── css/
│   ├── style.css            # Global application styles
│   └── profile.css          # Profile-specific styles
│
└── js/
    ├── admin.js             # Admin dashboard logic
    ├── auth.js              # Authentication helper utilities
    ├── location.js          # Location fetching and handling
    ├── location-details.js  # Location detail view logic
    ├── login.js             # Login form submission logic
    ├── my-reports.js        # User report tracking logic
    ├── profile.js           # User profile script
    ├── register.js          # Registration logic
    └── script.js            # General UI behaviors
