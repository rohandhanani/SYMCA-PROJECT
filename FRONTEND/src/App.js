import "./App.css";
import Landing from "./components/Landing";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import Forgetpassword from "./components/ForgetPassword/ForgetPassword";
import Changepassword from "./components/ChangePassword/ChangePassword";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/compiler' element={<Landing />} />
          <Route path='/' element={<Banner />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<Forgetpassword />} />
          <Route path='/change-password' element={<Changepassword />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
