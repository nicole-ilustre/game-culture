import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NoPageFound from './pages/NoPageFound';
import GamePage from './pages/GamePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/game-page/:id' element={<GamePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
