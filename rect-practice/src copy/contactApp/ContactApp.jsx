import React, { Component } from 'react'
import Axios from 'axios'
import ContactDeatiles from './ContactDeatils'
import ContactList from './ContactList'
export class ContactApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            sel_contacts: {}
        }
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({ contacts: response.data })
            })
            .catch(() => { })
    }
    userSelected_contact = (contact) => {
        this.setState({ sel_contacts: contact })
    }
    render() {
        return (
            <div>
                <h1>Contact App</h1>
                <div className="container">
                    <div className="row">
                        <pre>{JSON.stringify(this.state)}</pre>
                        <div className="col-md-8">
                            {
                                this.state.contacts.length > 0 ? <>
                                    <ContactList contacts={this.state.contacts} data={this.userSelected_contact} />
                                </> : null
                            }
                        </div>
                        <div className="col-md-4">
                            { 
                               Object.keys(this.state.sel_contacts).length > 0 ? <>
                                    <ContactDeatiles selectedData={this.state.sel_contacts} />
                                </> : <h5>selct any row clear data</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactApp
