import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListEmployeeComp from './Components/ListEmployeeComp';

import 'bootstrap/dist/css/bootstrap.min.css';
import { HeadComp } from './Components/HeadComp';
import { FooterComp } from './Components/FooterComp';
import CreateEmpComp from './Components/CreateEmpComp';
import UpdateEmployeeComp from './Components/UpdateEmployee';





function App() {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <BrowserRouter>
      <HeadComp></HeadComp>
      
      <Routes>
        <Route path='/' element={<ListEmployeeComp/>}></Route>
        <Route path='/emlpoyees' element={<ListEmployeeComp />}></Route>
        <Route path='/add-emp' element={<CreateEmpComp/>}></Route>
        <Route path='/edit-employee/:id' element={<UpdateEmployeeComp />}></Route>
      
      
      </Routes>

      <FooterComp></FooterComp>
      </BrowserRouter>
      </div>
  );
}

export default App;
