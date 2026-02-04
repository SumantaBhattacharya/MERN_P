<style>

p{
    font-size: 3vw;
    font-family: Sans MS;
}

</style>

<p class="custom-font" >

> \***_Localhost_** is just a special IP address 127.0.0.1, which always points to your own computer.\*

> _2. Using LAN (local network) i. If you want your phone, tablet, or another PC to access your React frontend or Node backend: i.i. You use your private IP on your LAN. Example: 192.168.1.10:3000 for React, 192.168.1.10:5000 for Node. i.ii. Your devices must be connected to the same Wi-Fi or wired LAN. i.iii. In this case, your private IP acts like your “address” inside your home network, so other devices can reach your server._

# **_How to Connect Frontend and Backend in JavaScript | Fullstack Proxy and CORS_**

[![How to Connect Frontend and Backend in JavaScript | Fullstack Proxy and CORS](https://img.youtube.com/vi/fFHyqhmnVfs/0.jpg)](https://youtu.be/fFHyqhmnVfs?si=g6yS6sJ9oWmceCch)

# **_Setting Up Project - NodeJS Blogging Application with MongoDB_**

[![Setting Up Project - NodeJS Blogging Application with MongoDB](https://img.youtube.com/vi/6z6CR29gtds/0.jpg)](https://youtu.be/6z6CR29gtds?si=YmYOreK_qkkRh7Ls)

## **_5. LocalStorage, SessionStorage, and Cookies_**

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

# **_URL Shortner_**

- _Url short_
- _Redirect_
- _Custom URL_
- _User signin/signup_
- _Analysis_

```
                  user
                   👆     url          random id
google.com ---> [React] ---> [Node]    --->     [DB] short url - random id, long url - original url
                        <---           <---

```

# T**_anStack Query_**

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

</p>

# **_Uploading Files with NodeJS and Multer_**

[![Uploading Files with NodeJS and Multer](https://img.youtube.com/vi/WqJ0P8JnftI/0.jpg)](https://youtu.be/WqJ0P8JnftI?si=yHyep0ipjR3M3xOH)

## **_Track of Visited links during this lecture_**

- [_multer_](https://www.npmjs.com/package/multer)

<!-- # ***What is Langchain and vector databases***

[![What is Langchain and vector databases](https://img.youtube.com/vi/DcNxg61kSFc/0.jpg)](https://youtu.be/DcNxg61kSFc?si=PzvRI1jUN1G19S2R)

# ***What are Vector Embeddings? | Pinecone DB | ChatGPT***

[![What are Vector Embeddings? | Pinecone DB | ChatGPT](https://img.youtube.com/vi/1EookJWbvQM/0.jpg)](https://youtu.be/1EookJWbvQM?si=YnzuM6q9zpQY-see) -->

<!-- 21st.dev -->

<!-- 

Project Overview of Zoom Clone

1. Tools Required
2. Frontend Technologies
3. Backend Technologies
4. Database Configeration
5. Testing Framework
6. Deployment Platform
7. GitHub Setup

-->

<!-- https://github.com/copilot/share/c0151110-4100-8851-9900-e648c0d94168 -->

# ***Docker - Complete Tutorial*** 
 - `Why do we need Docker?` 
 - `What is Docker? [Container & Image]`
 - `Docker Installation (Windows OS)` 
 - `~~Docker Installation (Mac OS)~~` 
 - `Important Docker Commands`
 - `Docker vs Virtual Machine`
 - `Image vs Container`
 - `More Docker Commands` 
 - `Port Binding` 
 - `Troubleshoot Commands`
 - `Use Case: Use Docker with Development`
 - `Docker Network`
 - `Set up mongo & mongo-express`
 - `Connect DB with Node App`
 - `Docker Compose`
 - `Use Case: Dockerizing our App`
 - `Creating Dockerfile`
 - `Publish Image on DockerHub`
 - `Docker Volumes` 
 - `Volumes Commands`
 - `Revisiting Docker Network`


# ***CI/CD - Complete Tutorial***
<!-- delta CI/CD topics covered -->
- `Continuous Integration & Continuous Delivery`
- `CI/CD Pipeline`
- `CI/CD Tools`
- `Working with Github Actions`
- `.yaml for Automation`
- `Set up JS project with Jest`
- `Our first CI setup`
- `CI/CD for MERN Project`
- `Set up AWS EC2`
- `CI/CD for Backend Module`
- `Automate .env backup`
- `CI/CD for Frontend Module`
- `Workflow Summary`

CI/CD

Continious Integration
Continious Delivery (Deployment)

CI/CD Tools:
Jenkins → Builds Docker images in pipelines
GitLab CI → Native Docker support
GitHub Actions → Docker container jobs

Orchestration:
Kubernetes → Manages Docker containers 

# ***Kubernetes***
- `What is Kubernetes?`
- `Components - Node & Pod`
- `Service & Ingress`
- `ConfigMap & Secret`
- `Volumes`
- `Deployment & StatefulSet`
- `Kubernetes Architecture`
- `Summary`
- `Local Setup - Minikube & Kubectl`
- `Installation`
- `Kubectl Commands [GET]`
- `CREATE Command`
- `Debugging Commands [LOGS & EXEC]`
- `APPLY Command`
- `YAML Configurations`
- `Status in Configuration`
- `Deploying mongo-app in K8s`
- `Configuring Mongodb`
- `Configuring Mongo Express`
- `Namespace in K8s`
- `Namespace Use cases`
- `Custom Namespaces`
- `Scope`
- `Kubens Installation`
- `Ingress in K8s`
- `Ingress Controller`
- `Configure app with Ingress`
- `Helm - Package Manager`
- `Helm chart structure` 

→ it is a container orchestration system. i. cloud agnostic. ii. high availability. iii. scalability. iv. reliability.