import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './components/Main';
import Details from './components/Details';
import { fetchAllMarkets } from './redux/categories/categories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMarkets());
  }, []);

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
