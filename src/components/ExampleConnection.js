import React, { Component } from 'react'

class ExampleConnection extends Component {
    componentDidMount() {
        const apiUrl = 'http://localhost:8000/api/'
        fetch(apiUrl).then((response) => response.json())
        .then((data) => console.log(data))
    }
    
    render() {
        return (
            <div>
                Example Connection
            </div>
        )
    }
}

export default ExampleConnection
