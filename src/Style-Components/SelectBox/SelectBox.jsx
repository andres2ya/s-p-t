import React, { Component } from 'react'
import './SelectBox.css'

class SelectBox extends Component {
    render() {
        return (
            <select className="SelectBox">
                <option className="OptionBox" value="Otra evaluacion">Otra evaluacion</option>
            </select>
        )
    }
}
export default  SelectBox