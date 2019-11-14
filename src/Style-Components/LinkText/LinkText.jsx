import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './LinkText.css'

class LinkText extends Component {
    render() {
        return <Link to={this.props.to}>

            <span className={`${'LinkText'} ${'LinkText'}${this.props.color}`}>
                {this.props.text}
            </span>
            
            </Link>;
    }
}
export default  LinkText