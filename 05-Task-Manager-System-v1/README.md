Task Manager API v1

A simple task manager backend built with Node.js and Express.

---

Features

Create tasks

View all tasks

Update a task

Mark a task as complete

Delete a task

In-memory storage (no database)

---

Tech Stack

Node.js

Express

---

API Routes

Create a task

POST /tasks

Body:

{
  "title": "Finish backend homework"
}

---

Get all tasks

GET /tasks

---

Get a single task by ID

GET /tasks/:id

---

Update a task

PUT /tasks/:id

Body:

{
  "title": "Updated task title"
}

---

Mark a task as complete

PATCH /tasks/:id/complete

---

Delete a task

DELETE /tasks/:id

---

How to run

npm install
node Server.js

Server runs on:

http://localhost:3000
