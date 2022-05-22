import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import About from './components/Home/About';
import Navbar from './components/Home/Navbar';
import Purchase from './components/Home/Purchase';
import PrivateRoute from './components/Authentication/PrivateRoute';
import Register from './components/Authentication/Register';

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/purchase/:purchaseId' element={<PrivateRoute><Purchase></Purchase></PrivateRoute>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
