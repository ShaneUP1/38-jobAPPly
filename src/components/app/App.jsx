import React from 'react';
import Main from '../../containers/Main';
import { BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import UpdatePage from '../../containers/UpdatePage';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/update/:id" component={UpdatePage} />
        </Switch>
      </Router>
      
    </>
  );
}
