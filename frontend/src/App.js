import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
