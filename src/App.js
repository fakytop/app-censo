// import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login.jsx'
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Login />
        <Signup />
        {/* <Dashboard/> */}
      </Provider>

    </div>
  );
}

export default App;

