import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Preview from './Preview';

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar/>
          <Routes>
            <Route exact path = "/" element = {<Home />}></Route>
            <Route path = "/preview" element = {<Preview />}></Route>
          </Routes>
        </div>
    </Router> 
  );
}
//hola
export default App;
