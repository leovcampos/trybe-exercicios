import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {  }
    render() { 
        return (
            <>
            <Link to='/login'>Login</Link>
            </>
        );
    }
}
 
export default Home;