
import './App.css';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Switch} from 'react-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import noMatch from './Components/Nomatch'
import Aboutus from './Components/Aboutus'



function App() {
  return (
    <>
    <Route>
      <Switch>
        <Route  exact path="/" component={Home}></Route>
        <Route  path="/aboutuse" component={Aboutus}></Route>
        <Route  path="/contact" component={Contact}></Route>
        <Route  component={noMatch}></Route>
      </Switch>
    </Route>

    </>
  );
}

export default App;
