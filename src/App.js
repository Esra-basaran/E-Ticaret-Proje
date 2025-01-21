import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes , Route} from 'react-router-dom';
import Header from './body/header';
import Footer from './body/footer';
import Home from './pages/home';
import Girisler from './pages/girisler';
import Giris from './pages/giris';
import Uye from './pages/uye';
import Sepet from './pages/sepet';
import Kadin from './pages/component/kadin';
import Erkek from './pages/component/erkek';
import Kozmetik from './pages/kozmetik';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/girisler" element={<Girisler/>} />
        <Route path="/giris" element={<Giris/>} />
        <Route path="/uye" element={<Uye/>} />
        <Route path="/sepet" element={<Sepet/>} />
        <Route path="/kadin" element={<Kadin/>} />
        <Route path="/erkek" element={<Erkek/>} />
        <Route path="/kozmetik" element={<Kozmetik/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
