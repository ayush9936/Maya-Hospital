import Button from './Pages/Button';
import Card from './Pages/Card';
import ForgetPwd from './Pages/ForgetPwd';
import Grid from './Pages/Grid';
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

function App() {
  return (
    <div className="App">


<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Home/>}/>
<Route  path="/login" element={<Login/>}/>
  <Route  path="/signup" element={<Signup/>}/>
  <Route path="/forget" element={<ForgetPwd/>}/>
  <Route path="/btn" element={<Button/>}/>
  <Route path="/card" element={<Card/>}/>
  <Route path="/grid" element={<Grid/>}/>
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
