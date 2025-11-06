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

## **YAML - A complete course for developers**

[![YAML - A complete course for developers](https://img.youtube.com/vi/NaoMEy_urlI/0.jpg)](https://youtu.be/NaoMEy_urlI?si=zoqkoiNJksy0H_3B)

> YAML(Ain't Markup Language) - is a data serialisation format. e.g., XML(eXtensible Markup Language), JSON(JavaScript Object Notation). Extension starts ends with .yaml or .yml

```yaml

# chai_type: masala_chai
temperature: hot # Inline comments
servings: 2
brewing_time: 5

chai_recipe:
  base: black_tea
  milk: whole_milk

chai_recipe_two:
  base: green_tea
  milk: almond_milk

chai_name: Masala Chai
description: "Chai with cardamom, cinnamon, ginger"
tagline: 'The best chai in town!'

brewing_instruction: | # multiline string
  boil water
  add tea leaves
  add milk

brewing_instruction: > # multiline string but this will be treated as a single line.
  boil water
  add tea leaves
  add milk

cups_per_day: 3
cups_per_serving: 3+5e+2
cups_per_week: 0xFF22FF

is_hot: true
add_sugar: yes
add_salt: no # yaml automatically ditects of what type of datatype it is.
instant: off # n, N, false, False, FALSE

sweetner: null
alternative_milk: ~ # null

morning_brew: 2025-01-15
local_time: 2025-01-15 08:30:01

spice: #list
  - ginger
  - cloves
  - cardamom

# spices: [ginger, cloves, cardamom] # list - old format

---

steeping_times: [3, 2, 1]

---

{ingredients: "sugar", "tea_leaves", "cardamom"}

---
chai_categories:
  - name: Traditional
    varities:
        - Masala Chai
        - Ginger Chai
        - Cardmon Chai
  - name: Modern
    varities:
        - Vanilla Chai
        - Mint Chai
        - Chocolate Chai

--- # Now, yaml(is a collection of 0 or more documents and gets seperated by "---") will know this is a different type of document

masala_chai:
  ingredients:
    tea: black_tea
    liquid: 
      water: 200ml
      milk: 100ml
    spices:
      ginger: 1_inch
      cinnamon: 1_stick
  preparation:
   method: simmer
   duration: 5_minutes
  
chai_menu: # list of dictionaries 
  - name: Masala Chai
    price: 3$
    size: medium

  - name: Vanilla Chai
    price: 4$
    size: regular

# Reusing properties with anchors
default_chai_base: &default_base
  tea: black_tea
  water: 200ml
  brewing_time: 5

morning_chai: # pointing the anchor
  <<: *default_base
  milk: 100ml

evening_chai: 
 <<: *default_base
 brewing_time: 10 # overwrite
 milk: 50ml

zip_code: !!str 12345 # enforced string
count: !!int "123" # force integer

chai_ingredients: !!seq
  - tea_leaves
  - milk
  - spices
# some of the seq will be empty known as sparse seq
  - 
  - sugar
---

# nested sequence

- 
  - tea_leaves
  - milk
  - spices
- 
  - sugar
  - water
  - spices

# key: value pairs are called maps
!!map
# nested mappings: map within an map
chai: Black_tea
preparation: {method: simmer, duration: 5_minutes} # another way of writting it

# one key to have multiple/duplicates values - pairs
chai: !!pairs
  - name: Masala chai
  - taste: Sweet # this will be a hash table containing arrays or array of hash tables in json

chai: !!pairs [name: Masala chai, taste: Sweet]

---

# !!set - will allow the user to have unique values for ex like email
unique_spices: !!set
  ? cardamon
  ? ginger
  ? cloves

# dictionary !!omap
chai: !!omap
  - Masala chai:
    price: 3$
    size: medium
    taste: sour
  - Vanilla chai:
    price: 4$
    size: regular
    taste: sweet
  
---

"chai": "Its a drink that tastes sweeter when you add sugar to it."

... # document finished here
```

# **_Complete YAML Course - Beginner to Advanced for DevOps and more!_**

[![Complete YAML Course - Beginner to Advanced for DevOps and more!](https://img.youtube.com/vi/IA90BTozdow/0.jpg)](https://youtu.be/IA90BTozdow?si=eybtMuagsnxHHfzu)

> Its a data format used to exchange data. In YAML, we can store only data and not commands. Where Serialisation is the process of converting the data objects in complex data structure into a stream or series of bytes that saves the state of this object in a form that is easily transmittable. In YAML, we can store documents and data objects.


YAML(is a markup language that is used to store data and known as data serialisation language used in configuration files) files are serialized representations of:
- Application configurations (Docker)
- Infrastructure states (Kubernetes)

Benifits
  - Simple & easy to read
  - It has a strict syntax - Indentation is important
  - Easily convertable to JSON, XML.
  - More powerfull when representing complex data
  - Parsing is easy.

```json
// this is json representation
{
  "name": "Masala Chai",
  "price": 3,
  "size": "medium",
  "ingredients": {
    "tea": "black_tea",
    "liquid": {
      "water": "200ml",
      "milk": "100ml"
    },
    "spices": [
      "ginger",
      "cinnamon",
      "cardamom"
    ]
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8">
<School name="Kendriya Vidhyalay" address="CCI Bokajan">
 <Students>
    <Student>
       <name>"Sumanta Bhattacharya"</name>
       <roll_no>1</roll_no>
       <marks>69.8%</marks>
    </Student>
 </Students>
</School>
```

# ***What is Langchain and vector databases***

[![What is Langchain and vector databases](https://img.youtube.com/vi/DcNxg61kSFc/0.jpg)](https://youtu.be/DcNxg61kSFc?si=PzvRI1jUN1G19S2R)

# ***What are Vector Embeddings? | Pinecone DB | ChatGPT***

[![What are Vector Embeddings? | Pinecone DB | ChatGPT](https://img.youtube.com/vi/1EookJWbvQM/0.jpg)](https://youtu.be/1EookJWbvQM?si=YnzuM6q9zpQY-see)

## **Takeaways - Real-World Analogy**

**Example** with words like King, Queen, Prince, Girl — showing how similar meanings are mapped close together numerically.
---
Problem with Direct Prompting
Why sending entire documents (like PDFs) to ChatGPT isn’t efficient.
Token limits and cost problems.
Building a Scalable Architecture
---

![Vector Embeddings](Vector_Embeddings-1.png)

```
Convert PDF → Text → Embeddings → Store in Pinecone DB.
```
*When a user asks a question, convert it to a vector, storing vectors in a specialized vector database (like Pinecone) and search for semantically similar chunks.
Send only relevant text to ChatGPT → faster, cheaper, and more accurate.*

![alt text](Vector_Embeddings-2.png)

<!-- 21st.dev -->