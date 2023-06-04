import './css/style.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./component/navbar/navbar";
import Slider from "./component/slider/slider";
import Loader from "./component/load_skelton/skelton";
import AboutMe from "./component/aboutMe/aboutMe";
import Skilles from "./component/skilles/skilles";
function App() {
    if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service Worker registered: ', registration);
    }).catch(error => {
      console.log('Service Worker registration failed: ', error);
    });
  });
}
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Slider/>}/>
            <Route path='slider' element={<Slider/>}/>
            <Route path='skilles' element={<Skilles/>}/>
            <Route path='aboutMe' element={<AboutMe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
