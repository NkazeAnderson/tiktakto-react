import React, { useRef } from 'react'

function Input() {
    const inputElement = useRef(null)
  return (
    <>
    <button onClick={()=>{
        inputElement.current.focus()
    }}> Focus text input</button> <br/>
    <input type="text" ref={inputElement} />
    </>
  )
}

export default Input