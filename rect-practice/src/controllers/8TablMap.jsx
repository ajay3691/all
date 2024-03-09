import React, { Component } from 'react'
import employees from './data'
export class TablMap extends Component {
    constructor(props){
        super (props)
        this.state={
            employees:employees
        }
    }
    

  render() {
    return (
      <div>
        <h1>table using Map method</h1>
        <pre>{JSON.stringify(this.state.employees)}</pre>
          <table className='table table-hover'>
            <thead className='bg-light'>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Gender</td>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=>{ //employees.map((emp,id)=>{  //  return <tr key={id}>
                        return <tr key={emp.id}>  
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.gender}</td>
                        </tr>
                    })
                }
            </tbody>
          </table>
      </div>
    )
  }
}

export default TablMap
