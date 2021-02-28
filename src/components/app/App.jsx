import React from 'react';
import Main from '../../containers/Main';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import UpdatePage from '../../containers/UpdatePage';
import { AuthProvider } from '../../state/AuthContext';
import PrivateRoute from '../auth/PrivateRoute';
import Header from '../header/Header';
import Home from '../home/Home';
import Signup from '../auth/Signup';

export default function App() {
  return (
    <>
      
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/myjobs" component={Main} />
            <PrivateRoute exact path="/update/:id" component={UpdatePage} />
          </Switch>
        </AuthProvider>
      </Router>
      
    </>
  );
}
