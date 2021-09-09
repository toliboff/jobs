import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Details from './components/Details';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
