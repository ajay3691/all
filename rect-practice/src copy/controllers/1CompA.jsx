import React from 'react'
import PropComp from './2PropComp'
function CompA() {
  const India = "Bharath"
  let AP = "Andra Pradesh"
  let Author = {
    name: "kondaveeti venkatakavi",
    award: "Padma Sree",
    img: "https://alchetron.com/cdn/timmarusu-1c53a22b-3125-44fd-b0fa-33069392f75-resize-750.jpeg",
    adress: ["Vijayanagara samrajyam", "Kodaveedu"]
  }

  let Emp = [
    { id: 101, name: "Rahul Gandhi", sal: 250 },
    { id: 102, name: "Sonia Gandhi", sal: 350 }]
 /*  let Emp = {
    1: { id: 101, name: "Rahul", sal: 250 },
    2: { id: 102, name: "Sonia", sal: 350 }
  }; */
  return (
    <div>
      <h2>kavi name : {Author.name}</h2>
      <h2>{India}</h2>
      <h2>{AP}</h2>
      <h2>Adress : {Author.adress[0]}</h2>
      <h2><img src={Author.img} alt="telugu poet" height="250px" /></h2>
      <h4>{Emp[1].id}</h4>
      <PropComp data={Author} emp={Emp} img={Author.img} to={Author.adress} />
    </div>
  )
}

export default CompA
