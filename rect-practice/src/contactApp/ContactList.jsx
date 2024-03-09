import React, { Component } from 'react'

export class ContactList extends Component {

    user_select=(contact)=>{
        this.props.data(contact)
    }
    render() {
        return (
            <div>
                <h1>Contact List</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <table className='table table-hover'>
                    <thead className='bg-light'>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Geder</td>
                            <td>City</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact, index) => {
                                return <tr key={index} onMouseOver={this.user_select.bind(this,contact)} >
                                    <td>{contact.login.uuid.slice(-3)}</td>
                                    <td>{contact.name.first.toUpperCase()}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.gender}</td>
                                    <td>{contact.location.city}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ContactList
