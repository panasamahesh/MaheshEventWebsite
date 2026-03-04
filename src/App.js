import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Service from "./Service";
import WeddingUpload from "./WeddingUpload";
import Gallery from "./Gallery";
import Contact from "./Contact"
import Packages from "./Packages";
// import AdminHome from './Adminside/Homepage';
// import Homepage from "./Adminside/Homepage";
import WhatsappFloat from "./WhatsappFloat"; 

function App() {
  
     
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Packages" element={<Packages/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Weddingupload" element={<WeddingUpload/>}/>
        {/* <Route path="/" element={<AdminHome/>}/> */}
      </Routes>
      <WhatsappFloat/>
    </BrowserRouter>
  );
}

export default App;
