<!-- npx nodemon index.js -->

# 🔗 ***URL Shortner***

- *Url short* 
- *Redirect* 
- *Custom URL*
- *User signin/signup*
- *Analysis*

```
                  user
                   👆     url          random id
google.com ---> [React] ---> [Node]    --->     [DB] short url - random id, long url - original url
                        <---           <---
```

```
GET - Redirection
POST - Create short url
```

When you write:

```js
secure: process.env.NODE_ENV === "production"
```

* If your app is running in **production** (`NODE_ENV=production`):
  → `secure: true` → the cookie is only sent over **HTTPS**.
* If your app is running in **development** (`NODE_ENV=development`):
  → `secure: false` → the cookie can also be sent over **HTTP** (so it works on `http://localhost`).

---

### ***🔑 Why this is useful***

* **Development (localhost):** you’re usually not running HTTPS locally, so you need `secure: false`.
* **Production (deployed with HTTPS):** you want cookies to be secure-only (`secure: true`), otherwise they’d travel over HTTP and be exposed.

## Installed packages

```bash
npm i nanoid
```

## learnings
- *Mongoose documents referencing each other is called circular referrecing*

## Visited links
- *https://www.dicebear.com/how-to-use/http-api/*

Great question 👌 because `sameSite` can make or break your cookie-based auth depending on how your frontend + backend are set up.

---

### 🔑 `sameSite` options

**1. `sameSite: 'strict'`**

* The cookie is **only sent** if the request originates from the **same site** (same domain).

**Use case:**

* Your frontend **and backend** are served from the same domain (e.g. `example.com` serves React + API).

* Example: `https://myapp.com` with backend also at `https://myapp.com/api`.

---

**2. `sameSite: 'lax'` (default in modern browsers)**

**Use case:**
* Your frontend and backend are on **different subdomains** or you need users to navigate into your app from outside links and still carry their session.

* Example: frontend at `https://app.myapp.com`, backend at `https://api.myapp.com`.
---

> *The cookie maxAge should not exceed the JWT expiry, otherwise the client might have a valid cookie but an expired token*

> *Aafter registration, the user should be automatically logged in instead of being sent to the login page for that we need to generate access and refresh tokens immediately after creating the user, set the refresh token in a cookie, and return the access token + user object in the response*

- *Service handles the business logic and validation → throws errors if needed.*
- *Controller just calls the service and sends the response*

**In Express.js `req.header()` is different from `req.headers`**

## `req.header("Authorization")` vs `req.headers.Authorization`

### 1. **`req.header("Authorization")`** ✅ (What you're using)
```javascript
const token = req.header("Authorization")?.replace("Bearer ", "");
```
- **`req.header()`** is an **Express method** that gets a specific header
- It's **case-insensitive** - works with "Authorization", "authorization", "AUTHORIZATION"
- Returns the header value as a **string**

### 2. **`req.headers.Authorization`** ✅ (Also works)
```javascript
const token = req.headers.Authorization?.replace("Bearer ", "");
// or
const token = req.headers.authorization?.replace("Bearer ", "");
```
- **`req.headers`** is the **raw Node.js headers object**
- It's **case-sensitive** - must match the exact case used by the client

## Why your current approach is better:

```javascript
// ✅ Better - case-insensitive
const token = req.header("Authorization")?.replace("Bearer ", "");

// ❌ Riskier - case-sensitive
const token = req.headers.Authorization?.replace("Bearer ", "");
```

## Example of the difference:

If a client sends:
```
Authorization: Bearer abc123
```

Both work:
```javascript
req.header("Authorization") 
req.headers.Authorization  
```

# ***Uploading Files with NodeJS and Multer***

[![Uploading Files with NodeJS and Multer](https://img.youtube.com/vi/WqJ0P8JnftI/0.jpg)](https://youtu.be/WqJ0P8JnftI?si=oQi968CSYWYpJOqC)
