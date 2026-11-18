# Intro to Backend - Week 1

HackYourFuture Foundation Week 1: Backend Development with Node.js, Express, SQLite, and Postman.

---

## 🚀 Getting Started

1. Navigate to this directory:
   ```bash
   cd intro-to-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🏃‍♂️ Running the Exercises

### Exercise 1
Run the simple server returning the current year:
```bash
npm run exercise1
```
Open: `http://localhost:3000/currentYear`

### Exercise 2 & Assignment
Run the database-connected server:
```bash
npm run exercise2
```
Open: `http://localhost:3000/` to view the interactive dashboard with the live user count!

---

## 📡 API Endpoints

### Classroom Endpoints:
- `GET /all-users` — Responds with all users sorted by ID.
- `GET /unconfirmed-users` — Responds with unconfirmed users (`confirmed_at IS NULL`).
- `GET /gmail-users` — Responds with users having an `@gmail.com` email.
- `GET /2022-users` — Responds with users created in 2022.
- `GET /user-count` — Responds with the total count of users in database.
- `GET /last-name-count` — Responds with user counts grouped by last name alphabetically.
- `GET /first-user` — Responds with the first user (or 404 if none).

### Assignment: 3 New Custom Endpoints:
- `GET /recent-users` — Responds with the 3 most recently created users (`ORDER BY created_at DESC LIMIT 3`).
- `GET /confirmed-users` — Responds with all verified users (`confirmed_at IS NOT NULL`).
- `GET /search?q=<name>` — Search users across first name, last name, or email.

### Assignment: Extended Home Route:
- `GET /` — Serves an HTML dashboard that dynamically fetches `/user-count` and displays the live total user count with modern styling.

---

## 🐶 Postman Dog API Collection

The Dog API collection for Part 2 is included in:
`Dog_API.postman_collection.json`

It covers the 5 required endpoints:
1. `GET https://dog.ceo/api/breeds/image/random/5`
2. `GET https://dog.ceo/api/breeds/list/all`
3. `GET https://dog.ceo/api/breed/beagle/images/random/3`
4. `GET https://dog.ceo/api/breed/poodle/list`
5. `GET https://dog.ceo/api/breed/poodle/toy/images`
