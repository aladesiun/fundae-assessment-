import './App.css';
import Login from './component/auth/login';
import Register from './component/auth/Register';
import Home from './component/home';
import Expenses from './component/Expenses';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Pagenotfound from './component/Pagenotfound';
import Cakecomponent from './component/Cakecomponent';

function App() {
 
  return (
    <div className="App rounded-[40px] md:m-5 m-2 md:mx-12 mx-2 p-3 bg-white">
      <div className='home bg-homebg rounded-[30px] pt-5 p-2'>
      <Router>
      <Switch>
        <Route path={'/signin'}>
          <Login/>
        </Route>
        <Route path={'/signup'}>
          <Register/>
        </Route>
        <Route exact path={'/'}>
          <Home/>
        </Route>
        <Route exact path={'/expenses'}>
          <Expenses/>
        </Route>
        <Route path={'/cake'}>
          <Cakecomponent/>
        </Route>
        <Route path={'*'}>
          <Pagenotfound/>
        </Route>
      </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
