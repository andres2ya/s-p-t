import React, { Component } from 'react'
import './TextAreaMod.css'

class TextAreaMod extends Component {
    render() {
        return (
            <textarea className="TextAreaMod" placeholder={this.props.placeholder}>
                {this.props.text}
            </textarea>
        )
    }
}
export default  TextAreaMod