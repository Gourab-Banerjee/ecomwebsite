// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";


import ProductListPage from "./components/Pages/ProductListPage";

function App() {
  return (
    <div className="container">
      <Router>
     <Header />
     <Routes>
     <Route  path="/" element={<HomePage/>}/>
     <Route path="/productList" element={<ProductListPage />} />
  
      </Routes>
     <Footer />
     </Router>
    </div>
  );
}

export default App;
