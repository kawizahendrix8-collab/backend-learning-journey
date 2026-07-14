Blog API v1

A simple blog backend built with Node.js and Express.

---

Features

Create blog posts

View all posts

View a single post by ID

Update a post

Delete a post

In-memory storage (no database)

---

Tech Stack

Node.js

Express

---

Post Shape

{
  "id": 1,
  "title": "My first post",
  "body": "The actual content of the post...",
  "author": "Hendrix",
  "createdAt": "2026-07-14T19:41:00.000Z"
}

---

API Routes

Create a post

POST /posts

Body:

{
  "title": "My first post",
  "body": "The actual content of the post...",
  "author": "Hendrix"
}

---

Get all posts

GET /posts

---

Get a single post by ID

GET /posts/:id

---

Update a post

PUT /posts/:id

Body:

{
  "title": "Updated title",
  "body": "Updated content"
}

---

Delete a post

DELETE /posts/:id

---

How to run

npm install
node Server.js

Server runs on:

http://localhost:3000
