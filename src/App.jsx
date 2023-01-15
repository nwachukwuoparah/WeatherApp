import { useState, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Dashboard from './Dashboard/Dashboard'
import Input from './Inptu/Input'
import {key} from './Api_Key' 
const reducer = (input, action) => {
  switch (action.type) {
    case 'Add':
      return action.payload.input
  }
}
function App() {
  const [state, setState] = useState([])
  const [input, dispach] = useReducer(reducer, localStorage.getItem('value'))
  const Fetch = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`)
    // console.log(res.data)
    setState(res.data)
  }
  
  useEffect(() => {
    input ? localStorage.setItem('value', input) : localStorage.setItem('value', 'Lagos')
    // console.log(localStorage.getItem('value'))
    Fetch()
  }, [input])

  return (
    <div className="App">
      <div className='app_wrap'>
        <Dashboard state={state} />
        <Input dispach={dispach} input={input} state={state} />
      </div>
    </div>
  )
}

export default App
