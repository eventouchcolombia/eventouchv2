import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Navigation } from './components/navbar/navigation';
import { ServicioDetalle } from './pages/servicioDetalle';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios/:servicioId' element={<ServicioDetalle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
