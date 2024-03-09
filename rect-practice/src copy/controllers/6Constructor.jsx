import React, { Component } from 'react'

export class Constructor extends Component {
    constructor(props) {
        super(props)
        // console.log("First Cosnt")
        this.state = {
            ct: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        // console.log("After Render method")
        setInterval(() => {
            this.setState({
                ct: new Date().toLocaleTimeString()
            })
        }, [1000])
    }
    render() {
        //console.log("Second Render")
        return (
            <div>
                <h3>Contructor</h3>
                <h3>Time:{this.state.ct}</h3>
            </div>
        )
    }
}

export default Constructor
