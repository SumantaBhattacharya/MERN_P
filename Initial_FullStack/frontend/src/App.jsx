import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [isJokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')//http://localhost:3000 (proxies)
      .then((response)=>{
        setJokes(response.data);
      })
      .catch((error)=>{
        console.error("Error fetching jokes:", error);
      });
  }, [ ]);// cors - cross origin
  

  return (
    <>
      <h1>Initial Setup of FullStack</h1>

      <p>JOKES: 
        {
          isJokes.length
        }
      </p>

      {
        isJokes.map(
          (joke, index)=>
            (<div
            key={joke.id}
            >
              <h2>{joke.title}</h2>
              <p>{joke.content}</p>
            </div>)
          
        )
      }

    </>
  )
}

export default App
// npm run build