import React, { Component } from 'react'
import './MsgError.css'

class MsgError extends Component {
    render() {
        return (
            <div className="MsgErrorBox">
                {this.props.msgError}
            </div>
        )
    }
}
export default  MsgError