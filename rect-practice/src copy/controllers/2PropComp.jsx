import React from 'react'

const PropComp = (props) => {
  return (
    <div> 
      <h1>Props Component</h1>
      <hr />
      <pre>{JSON.stringify(props)}</pre>
      <h3>{props.to[0]}</h3>
      <h3>{props.data.name}</h3>
      <h3><img src={props.img} alt="" height="300px" /></h3>
      <h3>{props.data.name}</h3>
      <h4>{props.emp[1].name}</h4>
    </div>
  )
}

export default PropComp
