import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css';
import Login from './page/Login';
import Footer from "./component/Footer"
// import Navbar from "./component/Navbar"
import Home from './page/Home';
import Profile from './page/Profile';
import Product from './page/Product';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/product' element={<Product />} />
        <Route path='/footer' element={<Footer />} />
        {/* <Route path='/navbar' element={<Navbar />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
