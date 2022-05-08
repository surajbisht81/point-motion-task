import './App.css';
import { Routes, Route } from 'react-router-dom';
import ManageProducts from './components/ManageProducts';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/manageproducts' element={<ManageProducts />} />
      </Routes>
    </div>
  );
}

export default App;
