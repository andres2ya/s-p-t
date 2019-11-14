import React, { Component } from 'react'
import './CheckBtn.css'

class CheckBtn extends Component {
    render() {
        return (
            <div>
                <input name={this.props.name} value={this.props.value} type="checkbox"/>
                <span>{this.props.text}</span>  
            </div>         
        )
    }
}
export default CheckBtn
