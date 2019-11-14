import React, { Component } from 'react'
import './Login.css'
import logoLogin from '../assets/logoLogin.png'
import BorderRadiusTextBox from '../Style-Components/BorderRadiusTextBox/BorderRadiusTextBox'
import LinkText from '../Style-Components/LinkText/LinkText'
import SpaceBetween from '../Style-Components/SpaceBetween/SpaceBetween'
import MsgError from '../Style-Components/MsgError/MsgError'
import ModButton from '../Style-Components/ModButton/ModButton'

class Login extends Component {

    leerDatos=(e)=>{
        e.preventDefault()
        console.log(e.target.name)
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="container">
                <div className="row logoRow">
                    <div className="col-12 d-flex justify-content-center align-items-end">
                        <img height="80" src={logoLogin} alt="" className="logoLogin"/>
                    </div>
                </div>
                <SpaceBetween space="ventePx"></SpaceBetween>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <form className="formLogin" action="submit">
                            <div className="form-row">
                                <div className="col-12 d-flex justify-content-center">
                                    <BorderRadiusTextBox name="user" onChange={this.leerDatos} background="false" id="user" type="text" placeholder="Email usuario"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 d-flex justify-content-center">
                                    <BorderRadiusTextBox name="pass" onChange={this.leerDatos} background="true" id=" user" type="password" placeholder="Contraseña"/>
                                </div>
                            </div>
                            <SpaceBetween space="diezPx"/>
                            {/* <div className="form-row">
                                <div className="col-12 d-flex justify-content-center">
                                    <MsgError msgError="Contraseña Incorrecta"/>
                                </div>
                            </div> */}
                            <div className="form-row">
                                <div className="col-12 d-flex justify-content-center">
                                    <LinkText to="/" color="Grey" text="¿Olvidaste la contraseña?"></LinkText>
                                </div>
                            </div>
                            <SpaceBetween space="diezPx"/>
                            <div className="form-row">
                                <div className="col-12 d-flex justify-content-center">
                                    <ModButton iconBtn="false" icon="icon-plus" type="AcceptButton" btnText="Entrar"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default  Login