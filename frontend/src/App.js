import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className='pages'>
          <Routes>
            <Route
            path='/'
            element={<HomePage/>}/>
            <Route
             path='/login'
             element={<Login/>}/>
             <Route
              path='/signup'
              element={<SignUp/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
