import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listuser from './Components/Listdetails';
import Adduser from './Components/addform';
import Edituser from './Components/Editform';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import {Provider} from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
    <Router>
          <div>  
            <Switch>
              <Route path="/" component={Listuser} exact/>
              <Route path="/adduser" component={Adduser} exact/>
              <Route path="/edituser/:id" component={Edituser} exact/>
            </Switch>
          </div>
    </Router>
    </Provider>

  );
}

export default App;
