import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import About from './About';
import Workdata from './Workdata';
//import { library } from '@fortawesome/fontawesome-svg-core'

import Preview from './Preview';
import Coverletter from './Coverletter';
import Coverletterpreview from './Coverletterpreview';

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar/>
          <Routes>
            <Route exact path = "/" element = {<Home />}></Route>
            <Route exact path = "/Resume" element = {<Resume />}></Route>
            <Route exact path = "/Coverletter" element = {<Coverletter />}></Route>
            <Route path = "/Coverletter/Previewcoverletter" element = {<Coverletterpreview />}></Route>
            <Route path = "/Resume/Preview" element = {<Preview />}></Route>
            <Route path = "/About" element = {<About />}></Route>
          </Routes>
        </div>
    </Router> 
  );
}
//hola
export default App;
