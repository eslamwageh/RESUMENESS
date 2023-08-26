import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route exact path = "/" element = {<Navbar />}></Route>
          </Routes>
        </div>
    </Router> 
  );
}

export default App;
