
# 🔐 Wispurr Backend — Secure Chat API

Welcome to the **Wispurr Backend**, the core engine that powers the next-gen secure messaging platform **Wispurr**. Built with Node.js, Express, and facial-auth magic 🪄, this backend ensures your conversations stay private, protected, and personalized.

---

## 🚧 Project Overview

The backend handles:

- 📸 **Facial Data Registration & Verification**
- 🔑 **User Authentication (JWT-based)**
- 💬 **End-to-End Encrypted Messaging APIs**
- 🧠 **User-Scoped Access Control**
- 🔐 **Unauthorized View Prevention via Facial Match**
- 💾 **MongoDB Storage for Users, Chats, and Sessions**

---

## 📂 Folder Structure

```

wispurr-backend/
├── config/           # DB, environment config
├── controllers/      # Request handlers (auth, chats, faceID)
├── middlewares/      # JWT, error handling, facial auth middleware
├── models/           # Mongoose schemas for User, Message, Chat
├── routes/           # Express routes grouped by domain
├── services/         # Facial recognition, encryption logic
├── utils/            # Helpers (hashing, response formatting)
├── app.js            # Main app file
└── server.js         # Entry point

````

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/wispurr-backend.git
cd wispurr-backend
````

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/wispurr
JWT_SECRET=your_secret_key
FACIAL_API_KEY=some_key_if_using_third_party
```

4. **Run the server**

```bash
npm start
```

---

## 🔒 API Features

### 🚀 Auth Endpoints

* `POST /api/register` – Register with face data
* `POST /api/login` – Login with password
* `POST /api/login-face` – Face-only login (for fast access)

### 💬 Chat Endpoints

* `GET /api/chats` – List all chats
* `POST /api/chats/:id/messages` – Send a message
* `GET /api/chats/:id/messages` – Get messages (if face verified)

### 🧠 Facial Match

* Streamed camera data (front-end) is used to verify the active user using:

  * Local model (if deployed) or
  * Third-party APIs (like AWS Rekognition or FaceIO)

---

## 🔐 Security

* All messages are **AES-256 encrypted** with user-bound keys.
* Unauthorized attempts to view chats return obfuscated strings.
* Every request is protected via **JWT** and face-check middleware.

---

## 💾 Tech Stack

* **Node.js + Express**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **Facial Recognition API**
* **Crypto & Bcrypt**
* **CORS + Helmet + Rate Limiters**

---

## 📄 License

This project is licensed under the MIT License.

---

## 💬 Contribution

Wanna help secure the future of messaging? Open a PR or start a discussion!

---

🧠 Built with vision.
🔒 Secured with face.
💬 Whispered with **Wispurr**.

