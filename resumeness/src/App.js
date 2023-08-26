import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path = "/" element = {<Home />}></Route>
          </Routes>
        </div>
    </Router> 
  );
}

export default App;
