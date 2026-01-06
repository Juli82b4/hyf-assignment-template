import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,  // Omit warning in console
});

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users ORDER BY id ASC;"
  );
  res.json(rows);
});

/*
Respond with all users who have NOT confirmed their account
*/
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE confirmed_at IS NULL;"
  );
  res.json(rows);
});

/*
Respond with all users who have a Gmail email address
*/
app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE email LIKE '%@gmail.com';"
  );
  res.json(rows);
});

/*
Respond with all users who were created in the year 2022
*/
app.get("/2022-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE created_at LIKE '2022%';"
  );
  res.json(rows);
});

/*
Respond with the total number of users in the database
*/
app.get("/user-count", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT COUNT(*) AS user_count FROM users;"
  );
  res.json(rows);
});

/*
Respond with how many users there are for each last name,
sorted alphabetically by last name
*/
app.get("/last-name-count", async (req, res) => {
  const rows = await knexInstance.raw(
    `
    SELECT last_name, COUNT(*) AS count
    FROM users
    GROUP BY last_name
    ORDER BY last_name ASC;
    `
  );
  res.json(rows);
});

/*
Respond with the first user.
If there are no users, respond with a 404.
*/
app.get("/first-user", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users ORDER BY id ASC LIMIT 1;"
  );

  if (rows.length === 0) {
    return res.status(404).json({ error: "No users found" });
  }

  res.json(rows);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
