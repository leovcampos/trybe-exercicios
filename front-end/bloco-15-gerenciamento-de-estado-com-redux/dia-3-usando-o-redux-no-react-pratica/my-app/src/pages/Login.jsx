import React from "react";
import { Link } from 'react-router-dom';

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return ( 
            <>
            <form>
                <input 
                type='email'
                name='email'
                placeholder="Digite seu e-mail"
                >
                </input>
                <input
                type='password'
                name='password'
                placeholder='senha'>
                </input>
                <button 
                type="button"
                onClick={ função }
                >
                    Login
                </button>
            </form>
            </>
         );
    }
}
 
export default Login;