import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import About from './components/Home/About';
import Navbar from './components/Home/Navbar';
import Purchase from './components/Home/Purchase';
import PrivateRoute from './components/Authentication/PrivateRoute';
import Register from './components/Authentication/Register';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import Blog from './components/Home/Blog';
import MyPortfolio from './components/Home/MyPortfolio';
import NotFound from './components/Home/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>} ></Route>
        <Route path='/purchase/:purchaseId' element={<PrivateRoute><Purchase></Purchase></PrivateRoute>} ></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
