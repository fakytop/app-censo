// import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login.jsx'
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ErrorNotFound from './components/errorNotFound/ErrorNotFound';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <Login />
      <Dashboard />
      <Signup />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="*" element={<ErrorNotFound/>}/>

            
            

          </Routes>
        </BrowserRouter> */}
      </Provider>

    </div>
  );
}

export default App;

