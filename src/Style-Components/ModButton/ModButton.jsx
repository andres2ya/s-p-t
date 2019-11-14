import React, { Component } from 'react'
import './ModButton.css'

class ModButton extends Component {
    render() {
        return (
          <button className={`${"ModButton"} ${this.props.type}`}>
            {this.props.iconBtn === "true" ? (
              <div className="row">
                <div className="col-12 iconBox d-flex justify-content-center align-items-center">
                  <i className={this.props.icon}></i>
                </div>
              </div>
            ) : (
              this.props.btnText
            )}
          </button>
        );
    }
}
export default  ModButton