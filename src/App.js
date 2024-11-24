import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './screens/Layout';
import Home from './screens/Home';
import Contact from "./screens/Contact";
import AdminPanel from "./components/Admin/AdminPanel";
import RegistrationForm from "./components/Product/RegistrationForm";
import CustomerReviews from "./components/Product/CustomerReviews";
import ProfileIcon from "./components/ProfileIcon";

 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/registrationform" element={<RegistrationForm />} />
            <Route path="/CustomerReviews" element={<CustomerReviews />} />
            <Route path="/ProfileIcon" element={<ProfileIcon />} />
            <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;