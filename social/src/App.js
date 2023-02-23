
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import Activation from './pages/Activation/Activation';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {

  return (
    <>

    <ToastContainer 
      style={{zIndex : 999999}}
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
     />

    <Routes>
      <Route path='/' element = { <Home /> } />
      <Route path='/login' element = { <Auth /> } />
      <Route path='/profile' element = { <Profile /> } />
      <Route path='/activation' element = { <Activation /> } />
    </Routes>

    
    </>
  );
}

export default App;
