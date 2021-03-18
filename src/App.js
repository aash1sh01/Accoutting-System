import logo from './logo.svg';
import './App.css';
import DashboardComponent from './Components/Dashboard'
import SignUp from './Components/Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/login'
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={DashboardComponent}/>
        <Route path='/login' componenet={Login}/>
        <Route path='/signup' component ={SignUp}/>
      </Switch>
    </Router>
    </>
  ) }
export default App;
