
import './App.css';
import Home from './components/Home/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/common/Footer';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          </Routes>
          </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
