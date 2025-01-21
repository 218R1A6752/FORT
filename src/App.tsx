import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Templates from './pages/Templates';

function App() {
  return (<>
  
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
      </>
  );
}

export default App;