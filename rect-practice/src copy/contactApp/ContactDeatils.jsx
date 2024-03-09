import React, { Component } from 'react'

export class ContactDeatils extends Component {
    render() {
        let { selectedData } = this.props
        return (
            <div>
                <h1>Contact Detiles</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={selectedData.picture.large} alt="" />
                                </div>
                                <div className="card-body">
                                    <ul className='list-group'>
                                        <li className='list-group-item' >{selectedData.name.first}</li>
                                        <li className='list-group-item' >{selectedData.email}</li>
                                        <li className='list-group-item' >{selectedData.location.city}</li>
                                        <li className='list-group-item' >{selectedData.dob.age}</li>
                                        <li className='list-group-item' >{selectedData.gender}</li>
                                        {/* <li className='list-group-item' >{this.props.selectedData.gender}</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDeatils
