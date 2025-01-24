import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Templates from './pages/Templates';
import TemplateDetails from './pages/templateDetails';
import Purchase from './pages/purchase';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/templates/:id" element={<TemplateDetails />} />
        <Route path="/purchase/:id" element={<Purchase />} />
      </Routes>
    </>
  );
}

export default App;
