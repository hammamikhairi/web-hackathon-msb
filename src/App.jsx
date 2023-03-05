// import { NotificationsProvider } from '@mantine/notifications';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
      <Router hashType='slash'>
        {/* <Navbar /> */}
        <div className="App">
          <Switch>
            <Route exact path="/">

              <Login />
            </Route>
            <Route exact path="/home">
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/blog/:id">

            </Route>
            <Route path="*">
              <h1>Made with ♥ by Khairi</h1>
            </Route>
          </Switch>
        </div>
        <ToastContainer />
      </Router>
  );
}

export default App;