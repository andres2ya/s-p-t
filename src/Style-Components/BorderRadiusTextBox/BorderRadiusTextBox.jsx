import React, { Component } from 'react'
import './BorderRadiusTextBox.css'

 class BorderRadiusTextBox extends Component {
    
    render() {
        return (
          <input
            onChange={this.props.onChange}
            name={this.props.name}
            className={
              this.props.background === "true"
                ? "BorderRadiusTextBoxBackground"
                : "BorderRadiusTextBox"
            }
            id={this.props.id}
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        );
    }
}
export default BorderRadiusTextBox