
import React, { useState, useContext } from 'react';
import AuthService from '../Service/AuthenticationService'
import {UserContext} from '../Context/UserContext'
import {
    Button
} from 'reactstrap';

const LoginComponent = props => {

    const [name, setName] = useContext(UserContext)
    const [password, SetPassword] = useState('')
    const [islogin, setIsLogin] = useState(false)
    const [showSucessMsg, setShowSucessMsg] = useState(false)

    function login() {
        console.log(name)
        console.log(password)
        if (name === 'admin' && password === 'nimda') {
            // setIsLogin(true)
            // setShowSucessMsg(false)
            AuthService.registerSuccessfulLogin(name)
            props.history.push(`/products`)
        }
        else {
            setIsLogin(false)
            setShowSucessMsg(true)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            {islogin && <div>Login Sucessfull</div>}
            {showSucessMsg && <div>Invalid Credentials</div>}
            User Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            Password: <input type="password" name="password" value={password} onChange={(e) => SetPassword(e.target.value)} />
            <Button className="btn btn-success" onClick={login}>login</Button>
        </div>
    )
}

export default LoginComponent