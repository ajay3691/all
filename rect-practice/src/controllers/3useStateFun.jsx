import React from 'react'
import { useState } from 'react';
const useStateFun = () => {

  const [state, setState] = useState({
    msg: "hello"
  });

  const msghandler = () => {
    setState({ msg: "Hello good morning" })
  }

  return (
    <div>
      <h1>useState function SetState</h1>
      <hr />
      <h2>wish: {state.msg}</h2>
      <button onClick={msghandler}>change buddy</button>
    </div>
  )
}

export default useStateFun
