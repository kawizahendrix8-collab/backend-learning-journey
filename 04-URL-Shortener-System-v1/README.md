
URL Shortener System v1

A simple URL shortener backend built with Node.js and Express.


---

Features

Create short URLs from long URLs

Retrieve original URLs using short codes

Basic REST API structure

In-memory storage (no database)



---

Tech Stack

Node.js

Express



---

API Routes

Create short URL

POST /url

Body:

{
  "url": "https://google.com"
}


---

Get URL by short code

GET /url/:code


---

Get all URLs (debug)

GET /url/all


---

How to run

npm install
node Server.js

Server runs on:

http://localhost:3000


