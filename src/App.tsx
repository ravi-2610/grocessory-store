import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./COMPONENTS/LOGIN/Login";
import ADD from "./COMPONENTS/ADD/add";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<ADD />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;