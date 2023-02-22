import React, { useEffect, useState } from 'react'
import './App.css';

  function App() {
    const [joke, setJoke] = useState('')
useEffect(()=>{
  fetch(`https://api.chucknorris.io/jokes/random`)
  .then(res => res.json())
  .then(res => {
    setJoke(res.value)
  })
},[])
function GetNewJoke(){console.log('GetNewJoke')}
  return(
    <div>
    {joke}
    <button type ='button' onClick={GetNewJoke}>New Joke</button>

    </div>
  
  )
};


export default App;
