
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/UserLogin'
import SignUp from './components/UserRegistration';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact><Home /></Route>
        <Route path='/home' ><Home /></Route>
        <Route path='/userLogin' ><Login /></Route>
        <Route path='/user/register' ><SignUp /></Route>




      </Switch>

    </div>
  );
}

export default App;
