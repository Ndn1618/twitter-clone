import { Fragment } from 'react'
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import Signup from './Pages/SignUp/SignUp'

function App() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Fragment>
  );
}

export default App;
