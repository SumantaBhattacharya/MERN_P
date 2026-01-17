# ***[Redux](https://redux.js.org/)***

- State Management Library for JS Apps
- Redux(indipendent state management library) is build for larger, more complex applictaions.
- [`Redux Tookit`](https://redux-toolkit.js.org/) is the official recommandation of writting Redux code

<!-- - State
  - Central Store(It(Object) is a central library that stores the state.) -->

[`react-redux`](https://redux-toolkit.js.org/introduction/getting-started#whats-included) is a library with the help of this library we can use redux in react UI library.

![Redux- A JS library for predictable and maintainable global state management](<WhatsApp Image 2025-04-15 at 11.33.59_974cea5e.jpg>)

- `Reducers`(*Pure functions use to update(mutating the state)*)

<span style="color: rgb(0, 189, 228); font-weight: 700; font-size: 6vw; border-bottom: 2px solid white;">Understanding Terms</span>

`Store:` **A centralized store holds the whole state tree of your application.**

`Reducers:` **Functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.**
 
 - `useSelector`
 - `useDispatch`

`Action:` **It is a plain JavaScript object that has a type field, (like events)**

`Slice:` **Collection of Redux reducer logic and actions for a single together in a single file**

![alt text](<WhatsApp Image 2025-04-15 at 19.22.31_cf278ee1.jpg>)

> *The Flex architecture, designed by Facebook, is a modular and scalable architecture used primarily for building React applications used for state management, data flow*.

* *You should never mutate your state directly in Redux.*

> *Redux Thunk and Redux Saga These are both middleware libraries for handling side effects (like async API calls) in Redux.*

>  *[Redux Toolkit (RTK)](https://redux-toolkit.js.org/introduction/getting-started#an-existing-app) brings a lot more abstraction*

```markdown
- npm i
- npm install @reduxjs/toolkit
- npm install react-redux
```

> When Vite starts, it creates a hidden .vite cache folder inside node_modules to optimize dependencies and speed up hot module reload (HMR).

## ***Links i been though during the progression of this project***
- [*Installation*](https://redux-toolkit.js.org/introduction/getting-started#an-existing-app)
- [*whats-included*](https://redux-toolkit.js.org/introduction/getting-started#whats-included)
- [*quick-start*](https://redux.js.org/tutorials/quick-start)
- [*Create a redux-store*](https://redux.js.org/tutorials/quick-start#create-a-redux-store)
- [*Create a Redux State Slice*](https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice)
- [*add-slice-reducers-to-the-store*](https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store)
- [*react-toastify*](https://fkhadra.github.io/react-toastify/introduction/)

<span style="font-family: 'Ethnocentric', sans-serif; color: #25AFF3; font-weight: 700; font-size: 5.5vw; border-bottom: 2px solid white;">Setup Project</span>

- <span style=" font-family: 'Ethnocentric', sans-serif; color: white; font-weight: 500; font-size: 3vw;">Store</span>
</br>
- <span style="font-family: 'Ethnocentric', sans-serif; color: white; font-weight: 500; font-size: 3vw;">Actions</span>
</br>
- <span style="font-family: 'Ethnocentric', sans-serif; color: white; font-weight: 500; font-size: 3vw;">Reducer's(an object of functions)'</span>

> *In Redux (including Redux Toolkit), reducers are passed to the store to manage the application's state.*

<span style="font-family: 'Ethnocentric', sans-serif; color: #25AFF3; font-weight: 700; font-size: 5vw; border-bottom: 2px solid white;">Setup Project</span>

`Designing the Store`

<span style="font-family: 'Ethnocentric', sans-serif; color: white; font-weight: 500; font-size: 3vw;">todo -> id, task, isDon</span>

`Actions`
<!-- are like events. imagine it as an object where its type is compulsary generally we keep it as a 'string'. Actually, we dont create actions by our own this is done automatically by redux-toolkit. -->

<span style="font-family: 'Ethnocentric', sans-serif;color: white; font-weight: 400; font-size: 3vw;">Add a Todo, Mark as Done, Delete a Todo</span>

```json
{
    type: "ADD_TODO",
    payload: "write code", // extra information(value). It can be an object too.
}
```

<span style="color: #25AFF3; font-weight: 700; font-size: 5vw; border-bottom: 2px solid white; font-family: 'Ethnocentric', sans-serif;">Creating a reducer</span>

<span style="font-family: 'Ethnocentric', sans-serif;color: white; font-weight: 400; font-size: 3vw;"> Redux Toolkit automatically generates action creators (fnxs that create action objects)</span>

<span style="font-family: 'Ethnocentric', sans-serif;color: white; font-weight: 400; font-size: 3vw;">(state,action) => {
    // update state
}</span>

* <span style="font-family: 'Ethnocentric', sans-serif;color: green; font-weight: 400; font-size: 3vw;">Redux Tookit lets you write simpler immutable update logic using "mutating" syntax.</span>

> *In Redux Toolkit (RTK), we create reducers based on slices.*

<span style="color: #25AFF3; font-weight: 700; font-size: 5vw; border-bottom: 2px solid white; font-family: 'Ethnocentric', sans-serif;">Provider Component</span>

**The `<Provider>` component makes the Redux store available to any nested components that need to access the Redux store.**

<span style="color: #25AFF3; font-weight: 700; font-size: 5vw; border-bottom: 2px solid white; font-family: 'Ethnocentric', sans-serif;">Dispatching Action</span>

**Triggering a  State Change**

* **The `useDispatch` hook allows you to send or dispatch an action to the Redux store by giving the action as an argument to the dispatch variable`**

* **The `useSelector` hook allows you to extract data or the state from the Redux store using the `useSelector` a function.(returns the data)**

```markdown
# *How do you manage complex state logic in React*
> By using the useReducer hook
```
```markdown
# *In React, what is the purpose of the useContext hook*
> Consuming values from React context
<!-- The useContext hook in React is used for consuming values from a React context. It allows a functional component to subscribe to a context and read its current value, providing an efficient way to share values like themes or authentication status across components. -->
```
```markdown
# *In Redux, what is the purpose of the reducer?*
> To update the state based on dispatched actions.
```