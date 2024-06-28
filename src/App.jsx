import './App.css';
import Header from './componets/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">

        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about" element={ <AboutPage /> } /> 
          <Route path='/contact' element={ <ContactPage/>}    />
          {/* добавь ещё одну страницу ContactPage */}
        </Routes>
    </div>
  );
}

export default App;
