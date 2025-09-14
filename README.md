# 🔐 Authentication Module – Bookies

This module handles **user authentication & authorization** for the Bookies project.  
It includes signup, login, role-based access control, and JWT-based session handling.

---

## ✨ Features

- User signup with hashed passwords (`bcrypt`).
- Secure login with **JWT** authentication.
- Role-based access control (`admin`, `reader`).
- Middleware for **protected routes**.
- Example protected and admin-only routes.

---

## 📁 Folder Structure

/models
User.js
/controllers
authController.js
/middleware
authMiddleware.js
/routes
authRoutes.js
server.js


---

## 📦 Dependencies

Make sure you have these installed:

```bash
npm install express mongoose bcrypt jsonwebtoken dotenv
