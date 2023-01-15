import './dashboard.css'
import logo from '../assets/react.svg'
import { useEffect, useReducer } from 'react'

const Dashboard = ({ state }) => {

  const date = () => {
    let date = new Date()
    return `${date.getHours()}:${date.getMinutes()}-${date.toLocaleDateString()}`
  }
  useEffect(() => {
    // date()
  }, [])
  return (
    <div className='Dashboard'>
      <div className='dashboard_wrap'>
      <img className='icon' src={` http://openweathermap.org/img/wn/${state.weather?.[0].icon}@2x.png`} />
      <p className='description'>{state.weather?.[0].description}</p>
        <div className='meter'>
          <h3 className='Dash_h1'>{Math.round(state?.main?.temp)}<sup>o</sup>C</h3>
          <div className='date'>
            <h2 className='Dash_h2'>{state.name}</h2>
            <p>{date()}</p>
          </div>
          <div className='disc'>
            <img src={` http://openweathermap.org/img/wn/${state.weather?.[0].icon}@2x.png`} />
            <p>{state.weather?.[0].description}</p>
          </div>
        </div>
      </div>
      {/* peace mass  */}
    </div>
  )
}

export default Dashboard 