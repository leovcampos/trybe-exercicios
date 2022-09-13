import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Clients from './pages/Clients'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/login' component={ Login }/>
      <Route path='/clients' component={ Clients }/>
    </Switch>
  );
}

export default App;
