# **_URL Shortner_**

Url short 
Redirect 
Custom URL
User signin/signup
Analysis

```
                  user
                   👆    url          random id
google.com ---> [React] ---> [Node] ---> [DB] short url - random id, long url - original url
                        <---        <---

```
```
      login    userfetch
[React] ⇆ [Node] ⇆  [DB]
    loginSuccess user
```
https://image.slidesharecdn.com/statefulsetinkubernetesimplementationusecases-v1-170226155449/75/Stateful-set-in-kubernetes-implementation-usecases-4-2048.jpg

stateful 
---
https://substack-post-media.s3.amazonaws.com/public/images/33631f1e-e350-4098-a044-17353f37ea37_1334x2038.png

what we were previously doing was stateless architecture.
Basically tokens shared between 
```
[React] <---> [Node] is stateless, that means token doesnt need to store in db. but in statefull tokens shared between [React] <---> [Node] <--->  [DB] when token are stored inside db.
```
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

<!-- terminal commands
npm list react

Installed packages
npm i axios -->

## ***Visited links***
[react-toastify](https://fkhadra.github.io/react-toastify/introduction/)

- _Url short_
- _Redirect_
- _Custom URL_
- _User signin/signup_
- _Analysis_

# **_TanStack Query_**

_It’s a library that helps you manage the state of data you fetch from servers, like APIs, in your React applications._
_One of the most powerful tools for manager server-side state in React._

## **_Advantages_**

- \***_Data Fetching Made Easy_**: With a simple useQuery hook, fetching data becomes super easy.\*

- \***_Built-in Loading and Error States:_** No need to write custom code for handling loading, errors, or success states.\*

- \***_Automatic Caching_**: React Query automatically caches your data.\*

- \***_Background Refetching_**: If your data gets stale or out of date, **_TanStack_** Query can refetch it in the background.\*

- \***_Pagination and Infinite Scrolling_**: Handling pagination or infinite scrolling? React Query has you covered with tools specifically designed for those complex use cases.\*

# **_QueryClient_**

- **_QueryClient_**: _It is the core part of the react-query library. It manages the caching, background fetching, data synchronization, and other query-related logic. It provides a centralized store for managing and caching asynchronous data in your application._

* _new QueryClient(): This creates a new QueryClient instance with default settings. You can configure it with options if needed (e.g., setting cache time, stale time, etc.)._

* \***_QueryClientProvider_**: This component is part of react-query and is used to provide the QueryClient instance to your entire React app (or a portion of it). This makes the qulient available via React's context API so that all the components in the tree can the useQuery, useklutation, and other hooks provided by react-query.\*

# **_Verdict_**

\***_TanStack_** Query makes working with server-side data in React a breeze. It’s fast, efficient, and reduces the amount of boilerplate code you need to write. If you’re working on any app that relies on API data, this tool is an absolute game-changer.\*

\*In React Query, the **_QueryClientProvider_** is a crucial component that provides a QueryClient instance to your React application. This QueryClient is responsible for managing all the data fetching, caching, and state management related to your queries.\*
