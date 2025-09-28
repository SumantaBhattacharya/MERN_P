<style>

p{
    font-size: 3vw;
    font-family: Sans MS;
}

</style>

<p class="custom-font" >

> ****Localhost*** is just a special IP address 127.0.0.1, which always points to your own computer.*

> *2. Using LAN (local network) i. If you want your phone, tablet, or another PC to access your React frontend or Node backend: i.i. You use your private IP on your LAN. Example: 192.168.1.10:3000 for React, 192.168.1.10:5000 for Node. i.ii. Your devices must be connected to the same Wi-Fi or wired LAN. i.iii. In this case, your private IP acts like your “address” inside your home network, so other devices can reach your server.*

# ***How to Connect Frontend and Backend in JavaScript | Fullstack Proxy and CORS***

[![How to Connect Frontend and Backend in JavaScript | Fullstack Proxy and CORS](https://img.youtube.com/vi/fFHyqhmnVfs/0.jpg)](https://youtu.be/fFHyqhmnVfs?si=g6yS6sJ9oWmceCch)

# ***Setting Up Project - NodeJS Blogging Application with MongoDB***

[![Setting Up Project - NodeJS Blogging Application with MongoDB](https://img.youtube.com/vi/6z6CR29gtds/0.jpg)](https://youtu.be/6z6CR29gtds?si=YmYOreK_qkkRh7Ls)

## ***5. LocalStorage, SessionStorage, and Cookies***

localStorage API: setItem, getItem, removeItem, clear
SessionStorage API
Storing/retrieving strings vs JSON
Basic cookie structure (manual key = value; path = /format)

why only strings work in localStorage
Cookies need manual encoding/expiration handling

User LocalStorage for state, cookies for cross-tab auth 

Local storage store the data in the browser 5mb's, Data persists even after closing the browser until manually cleared by the user
Session storage store the data in the browser but temporarily around 5mb's
Cookies can handle less data - 4kb, Can be set to expire at a specific time. Use case: Authentication tokens, tracking user sessions.

<!--
localStorage -> aaple browser ke ander data store kerna jo ki browser band hone par bhi delete nhe hoga
sessionStorage -> yeh aapka data temporarily store kerta hai matlab ki tab band hua aur data gya
cookies -> yeh bhi apka data store kerta hai and aapka data browser ke cookies name ki property meh save hota hai aur yeh cookie light weight data store krta hai. browser meh chota data save klerne ke liye cookies ka istemal hota hai
cookies mein jo bhi data store karoge wo data page reload par automatically server par jayega.
 -->

# ***URL Shortner***

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

# ***Setting Up Project - NodeJS Blogging Application with MongoDB***

[![Setting Up Project - NodeJS Blogging Application with MongoDB](https://img.youtube.com/vi/6z6CR29gtds/0.jpg)](https://youtu.be/6z6CR29gtds?si=YmYOreK_qkkRh7Ls)

## ***Track of Visited links during this lecture***
- [*multer*](https://www.npmjs.com/package/multer)

# T***anStack Query***
*It’s a library that helps you manage the state of data you fetch from servers, like APIs, in your React applications.*
*One of the most powerful tools for manager server-side state in React.*

## ***Advantages***
- ****Data Fetching Made Easy***: With a simple useQuery hook, fetching data becomes super easy.*

- ****Built-in Loading and Error States:*** No need to write custom code for handling loading, errors, or success states.*

- ****Automatic Caching***: React Query automatically caches your data.*

- ****Background Refetching***: If your data gets stale or out of date, ***TanStack*** Query can refetch it in the background.*

- ****Pagination and Infinite Scrolling***: Handling pagination or infinite scrolling? React Query has you covered with tools specifically designed for those complex use cases.*


# ***QueryClient***

- ***QueryClient***: *It is the core part of the react-query library. It manages the caching, background fetching, data synchronization, and other query-related logic. It provides a centralized store for managing and caching asynchronous data in your application.*

* *new QueryClient(): This creates a new QueryClient instance with default settings. You can configure it with options if needed (e.g., setting cache time, stale time, etc.).*

* ****QueryClientProvider***: This component is part of react-query and is used to provide the QueryClient instance to your entire React app (or a portion of it). This makes the qulient available via React's context API so that all the components in the tree can the useQuery, useklutation, and other hooks provided by react-query.*

# ***Verdict***
****TanStack*** Query makes working with server-side data in React a breeze. It’s fast, efficient, and reduces the amount of boilerplate code you need to write. If you’re working on any app that relies on API data, this tool is an absolute game-changer.*

*In React Query, the ***QueryClientProvider*** is a crucial component that provides a QueryClient instance to your React application. This QueryClient is responsible for managing all the data fetching, caching, and state management related to your queries.*

</p>
<!-- 
In Redux, the state is immutable. which is why we need Dispatch Action, Reducer

               
                              Redux Toolkit
                                   ┌─────────────────┐
                                   │                 │
                                   │  Initial State  │
                                   │    habits: []   │
                                   │                 │
                                   └─────────────────┘
                            👤                       ➹
                          ┌─────────────────┐       ┌─────────────────┐   
dispatch(addHabit({       │                 │       │                 │   {
name: "Read Book",        │  User Interface │       │  Dispatch Action│     type: "addHabit"
frequency: "Daily"        │                 │------>│                 │     payload: {name, frequency }
}))                       │                 │       │                 │   }
                          └─────────────────┘       └─────────────────┘   
                                     ⇧                    ⇩
                                  Re-render               ⇩
                                     ⇧                    ⇩
                        ┌-----------------------------------------------─┐
                        |  🛢️                         ⚙️                 |
                        | ┌─────────────────┐ Store ┌──────────────────┐ |
                        | │                 │       │                  │ |   addHabits: (
habits :[{              | │ Update State    │       │     Reducer      │ |     state,
    name: "Read Book",  | │                 │ --->  │                  │ |     action) => {
    frequency: "Daily"  | │                 │       │                  │ |     state.habits.push({
    }],                 | └─────────────────┘       └──────────────────┘ |     name: action.payload,
                        └------------------------------------------------┘     frequency: action.payload })} 

Store is where the state lives  
Reducer will create a copy of our current state, then it will overlap out previous state.
 -->
