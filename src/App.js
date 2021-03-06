import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch ,  useLocation} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron'
import { createBrowserHistory } from 'history'
import PrivatesRepo from './functions/PrivatesRepo'



export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}
const newHistory = createBrowserHistory();

class App extends Component {



  
  render() {
    return (
      <React.Fragment>
        <Router  history={newHistory}>
        v{process.env.REACT_APP_VERSION}
          <NavigationBar />
          <Jumbotron/>
          <PrivatesRepo/>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
            <LocationDisplay />
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;