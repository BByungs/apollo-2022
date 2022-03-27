import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from '../routes/Detail/Detail.js';
import Home from '../routes/Home/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
