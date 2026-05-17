import './App.css';
import WeatherPage from './pages/WeatherPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-shell">
              <WeatherPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
