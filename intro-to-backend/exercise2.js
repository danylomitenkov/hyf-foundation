import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

// Connect to the SQLite database
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

// Middleware to parse JSON bodies (if needed)
app.use(express.json());

// ==========================================
// ASSIGNMENT PART 1: EXTEND THE HOME ROUTE (/)
// Returns styled HTML that fetches /user-count
// ==========================================
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HYF User Dashboard</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        body {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #f8fafc;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
        }
        .container {
          background: #ffffff;
          color: #0f172a;
          border-radius: 16px;
          padding: 36px 32px;
          max-width: 580px;
          width: 100%;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        h1 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #1e293b;
        }
        p.subtitle {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 28px;
        }
        .counter-card {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 28px;
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
        }
        .counter-card .label {
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 12px;
          font-weight: 600;
          opacity: 0.9;
        }
        .counter-card .number {
          font-size: 56px;
          font-weight: 800;
          margin-top: 4px;
          transition: transform 0.3s ease;
        }
        .endpoints-title {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
          margin-bottom: 14px;
          text-align: left;
        }
        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 10px;
          text-align: left;
        }
        .links-grid a {
          display: block;
          background: #f1f5f9;
          color: #2563eb;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }
        .links-grid a:hover {
          background: #e2e8f0;
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }
        .status-badge {
          display: inline-block;
          margin-top: 24px;
          padding: 6px 12px;
          background: #dcfce7;
          color: #15803d;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>👥 User Management API</h1>
        <p class="subtitle">HackYourFuture Foundation • Intro to Backend Week 1</p>
        
        <div class="counter-card">
          <div class="label">Total Registered Users</div>
          <div class="number" id="user-count-display">...</div>
        </div>

        <div class="endpoints-title">Explore API Routes:</div>
        <div class="links-grid">
          <a href="/all-users" target="_blank">/all-users</a>
          <a href="/unconfirmed-users" target="_blank">/unconfirmed-users</a>
          <a href="/gmail-users" target="_blank">/gmail-users</a>
          <a href="/2022-users" target="_blank">/2022-users</a>
          <a href="/user-count" target="_blank">/user-count</a>
          <a href="/last-name-count" target="_blank">/last-name-count</a>
          <a href="/first-user" target="_blank">/first-user</a>
          <a href="/recent-users" target="_blank">/recent-users ⭐</a>
          <a href="/confirmed-users" target="_blank">/confirmed-users ⭐</a>
          <a href="/search?q=Smith" target="_blank">/search?q=Smith ⭐</a>
        </div>

        <div>
          <span class="status-badge" id="status-badge">● API Live & Connected</span>
        </div>
      </div>

      <script>
        // Fetch the user count from the /user-count route
        fetch('/user-count')
          .then(res => res.json())
          .then(data => {
            const countDisplay = document.getElementById('user-count-display');
            countDisplay.innerText = data[0].count;
          })
          .catch(err => {
            console.error('Error fetching count:', err);
            document.getElementById('user-count-display').innerText = 'Err';
            const badge = document.getElementById('status-badge');
            badge.innerText = '● Error fetching data';
            badge.style.background = '#fee2e2';
            badge.style.color = '#b91c1c';
          });
      </script>
    </body>
    </html>
  `);
});

// ==========================================
// CLASSROOM EXERCISES (1 - 7)
// ==========================================

// 1. /all-users: All users sorted by id ASC
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// 2. /unconfirmed-users: Users who haven't confirmed yet (confirmed_at is NULL)
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE confirmed_at IS NULL;");
  res.json(rows);
});

// 3. /gmail-users: Users with an @gmail.com email
app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE email LIKE '%@gmail.com';");
  res.json(rows);
});

// 4. /2022-users: Users created in the year 2022
app.get("/2022-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE created_at LIKE '2022%';");
  res.json(rows);
});

// 5. /user-count: Number of users in database
app.get("/user-count", async (req, res) => {
  const rows = await knexInstance.raw("SELECT count(*) as count FROM users;");
  res.json(rows);
});

// 6. /last-name-count: Count of users grouped by last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT last_name, count(*) as count FROM users GROUP BY last_name ORDER BY last_name ASC;"
  );
  res.json(rows);
});

// 7. /first-user: The first user by id. If empty, return 404
app.get("/first-user", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC LIMIT 1;");
  if (!rows || rows.length === 0) {
    return res.status(404).send("User not found");
  }
  res.json(rows[0]);
});

// ==========================================
// ASSIGNMENT PART 1: 3 NEW USEFUL ROUTES
// ==========================================

// New Route 1: /recent-users -> 3 most recently created users
app.get("/recent-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY created_at DESC LIMIT 3;");
  res.json(rows);
});

// New Route 2: /confirmed-users -> Users who have verified/confirmed their account
app.get("/confirmed-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE confirmed_at IS NOT NULL ORDER BY confirmed_at DESC;");
  res.json(rows);
});

// New Route 3: /search -> Search users by keyword in first_name, last_name, or email
// Usage: /search?q=Alice
app.get("/search", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Please provide a query parameter ?q=" });
  }
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE first_name LIKE ? OR last_name LIKE ? OR email LIKE ?;",
    [`%${query}%`, `%${query}%`, `%${query}%`]
  );
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
