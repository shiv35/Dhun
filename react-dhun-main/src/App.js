
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MusicApp from "./components/ContentBar/Home";
import Search from "./components/ContentBar/Search/Search";
import Librarypage from "./components/ContentBar/library/Library";
import MainScreen from "./components/ContentBar/mainscreen/MainScreen";
import HomePage from "./pages/Homepage/HomePage";
import Home from "./HomeAndLogin/Home";
import Aboutus from "./HomeAndLogin/Aboutus";
import Gallery from "./HomeAndLogin/Gallery";
import Login from "./HomeAndLogin/Login";
function App() {
  return (
    <div className="w-full ">
      <BrowserRouter>
      <Routes>
        <Route path="/musicapp" Component={MusicApp}>
            <Route path="/musicapp" Component={MainScreen}></Route>
            <Route path="/musicapp/search" Component={Search}></Route>
            <Route path="/musicapp/library" Component={Librarypage}></Route>
        </Route>
        <Route path="/" Component={HomePage}>
            <Route path="/Aboutus" Component={Aboutus}>
            </Route>
            <Route path="/Gallery" Component={Gallery}>
            </Route>
            <Route path="/" Component={Home}>
            </Route>
            <Route path="/Login" Component={Login}>
            </Route>
        </Route>
   
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
