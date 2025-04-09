import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Tender from './pages/Tender'; 
import Login from './pages/login';
import AdminDashboard from './pages/AdminPage';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/tender" element={<Tender />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />

          
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;