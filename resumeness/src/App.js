import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import { library } from '@fortawesome/fontawesome-svg-core'


function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path = "/" element = {<Home />}></Route>
            <Route path = "/Resume" element = {<Resume />}></Route>
          </Routes>
        </div>
    </Router> 
  );
}
//hola
export default App;
