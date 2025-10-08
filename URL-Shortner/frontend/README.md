URL Shortner
---
Url short 
Redirect 
Custom URL
User signin/signup
Analysis
                  user
                   👆     url          random id
google.com ---> [React] ---> [Node]    --->     [DB] short url - random id, long url - original url
                        <---           <---

      login    userfetch
[React] ⇆ [Node] ⇆  [DB]
    loginSuccess user

https://image.slidesharecdn.com/statefulsetinkubernetesimplementationusecases-v1-170226155449/75/Stateful-set-in-kubernetes-implementation-usecases-4-2048.jpg

stateful 
---
https://substack-post-media.s3.amazonaws.com/public/images/33631f1e-e350-4098-a044-17353f37ea37_1334x2038.png

what we were previously doing was stateless architecture.
Basically tokens shared between [React] <---> [Node] is stateless, that means token doesnt need to store in db. but in statefull tokens shared between [React] <---> [Node] <--->  [DB] when token are stored inside db.
 
JWT - microservices, cannot delete session that why we use refreh token policy

### JWT Authentication Flow

- `jwt.verify()` checks if the **access token** is present and valid.  
- If the **access token** is **valid** → the user is allowed to enter the website.  
- If the **access token** is **expired** → it then checks if a **refresh token** is present. but for access token it wont compare direclty give access to the user!  
- If the **refresh token** is **valid** →  
  - `jwt.verify` verifies the refresh token.  
  - Then it compares the refresh token with the one stored in the database.  
- If the **refresh token** is also **expired** →  
  - The user must re-enter their credentials.  
  - Logging in again will generate a **new access token** and **refresh token**.  
  - These are saved in the cookie, and the **old refresh token** in the database is updated with the new one.  

⚡ In any case, the **access token** and **refresh token** are never removed from the cookie until new ones are issued to replace them.

learnings
value = {val} // two way binding

terminal commands
npm list react

Installed packages
npm i axios

visited links
https://fkhadra.github.io/react-toastify/introduction/