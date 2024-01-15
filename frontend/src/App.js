import Doc from './Pages/Doc';
import Nurse from './Pages/Nurse';
import ForgetPwd from './Pages/ForgetPwd';
import Ward from './Pages/Ward';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Chart from "./Pages/Chart";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Typo from './Pages/Typo';
import Text from './Pages/Text';
import Table from './Pages/Table';
import Blank from './Pages/Blank';
import Error from './Pages/Error';
import Demo from './Pages/Demo';

function App() {
  return (
    <div className="App">

{/* <Demo/> */}
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Home/>}/>
<Route  path="/login" element={<Login/>}/>
  <Route  path="/signup" element={<Signup/>}/>
  <Route path="/forget" element={<ForgetPwd/>}/>
  <Route path="/btn" element={<Doc/>}/>
  <Route path="/card" element={<Nurse/>}/>
  <Route path="/grid" element={<Ward/>}/>
  <Route path="/typo" element={<Typo/>}/>
  <Route path="/text" element={<Text/>}/>
  <Route path="/chart" element={<Chart/>}/>
  <Route path="/table" element={<Table/>}/>
  <Route path="/blank" element={<Blank/>}/>
  <Route path="/error" element={<Error/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
