import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Sign from "./Sign";
import Login from "./Login";
import Resume from "./Resume";
import About from "./About";
import Profile from "./Profile";
import Workdata from "./Workdata";
//import { library } from '@fortawesome/fontawesome-svg-core'

import Preview from "./Preview";
import Coverletter from "./Coverletter";
import Coverletterpreview from "./Coverletterpreview";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/RESUMENESS" element={<Home />}></Route>
                    <Route
                        exact
                        path="RESUMENESS/Login"
                        element={<Login />}
                    ></Route>
                    <Route
                        exact
                        path="RESUMENESS/Sign"
                        element={<Sign />}
                    ></Route>
                    <Route
                        exact
                        path="RESUMENESS/Profile"
                        element={<Profile />}
                    ></Route>
                    <Route
                        exact
                        path="RESUMENESS/Resume"
                        element={<Resume />}
                    ></Route>
                    <Route
                        exact
                        path="RESUMENESS/Coverletter"
                        element={<Coverletter />}
                    ></Route>
                    <Route
                        path="RESUMENESS/Coverletter/Previewcoverletter"
                        element={<Coverletterpreview />}
                    ></Route>
                    <Route
                        path="RESUMENESS/Resume/Preview"
                        element={<Preview />}
                    ></Route>
                    <Route path="RESUMENESS/About" element={<About />}></Route>
                </Routes>
            </div>
        </Router>
    );
}
//hola
export default App;
