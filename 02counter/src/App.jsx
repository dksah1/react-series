import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 let [counter,setCounter] = useState(15)

// let counter =15
 
const addValue = ()=>{
  console.log("clicked",counter)
 counter = counter+1;
 setCounter(counter)
}
 
const subValue = ()=>{
  console.log("clicked",counter)
 counter = counter-1;
 setCounter(counter)
}
 
 return (
    <>
     <h1>chai</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>add value{counter}</button><br/>
     <button onClick={subValue}>remove  value{counter}</button>
    </>
  )
}

export default App
