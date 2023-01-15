import './input.css'
import { useRef, useEffect, useState, useReducer } from 'react';
import { BsSearch } from "react-icons/bs";
import PlacesAutocomplete from 'react-places-autocomplete';
const Input = ({ state, dispach, input }) => {
  const Input = useRef('')
// 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
  const Add = () => {
    if (Input.current.value) {
      dispach({ type: 'Add', payload: { input: Input.current.value } })
      // console.log(Input.current.value)
    }
  }
  useEffect(() => {
    Input.current.value = ''
    // console.log(location)
  }, [input])

  return (
    <div className='Input'>
      <div className='input_wrap1'>
        <input ref={Input} placeholder='Another Location' />
        < BsSearch style={{ color: 'white' }} onClick={() => { Add() }} />
      </div>
      <div className='input_wrap'>
        <div className='location'>
        </div>
        <div className='details'>
          <h3>Weather Details</h3>
          <div className='text'><p>Cloudy</p><p>{state.clouds?.all}%</p></div>
          <div className='text'><p>Humidity</p><p>{state.main?.humidity}%</p></div>
          <div className='text'><p>Wind</p><p>{state.wind?.speed}km/h</p></div>
          <div className='text'><p>Rain</p><p>0mm</p></div>
        </div>
      </div>
    </div>
  )
}

export default Input