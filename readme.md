> localhost is just a special IP address 127.0.0.1, which always points to your own computer.
> 2. Using LAN (local network) i. If you want your phone, tablet, or another PC to access your React frontend or Node backend: i.i. You use your private IP on your LAN. Example: 192.168.1.10:3000 for React, 192.168.1.10:5000 for Node. i.ii. Your devices must be connected to the same Wi-Fi or wired LAN. i.iii. In this case, your private IP acts like your “address” inside your home network, so other devices can reach your server.

# ***How to Connect Frontend and Backend in JavaScript | Fullstack Proxy and CORS***

[![How to Connect Frontend and Backend in JavaScript | Fullstack Proxy and CORS](https://img.youtube.com/vi/fFHyqhmnVfs/0.jpg)](https://youtu.be/fFHyqhmnVfs?si=g6yS6sJ9oWmceCch)

# ***Setting Up Project - NodeJS Blogging Application with MongoDB***

[![Setting Up Project - NodeJS Blogging Application with MongoDB](https://img.youtube.com/vi/6z6CR29gtds/0.jpg)](https://youtu.be/6z6CR29gtds?si=YmYOreK_qkkRh7Ls)

5. LocalStorage, SessionStorage, and Cookies

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
```
URL Shortner
---
Url short 
Redirect 
Custom URL
User signin/signup
Analysis
```
```
                  user
                   👆     url          random id
google.com ---> [React] ---> [Node]    --->     [DB] short url - random id, long url - original url
                        <---           <---

```