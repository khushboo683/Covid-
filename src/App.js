import React,{useState} from 'react'
import Table from './Components/Table'
import VaccData from './Components/VaccData';
import Navbar from './Components/Navbar';
import SlotList from './Components/SlotList'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  

  const[date,setDate]=useState();
  const[pincode,setPincode]=useState();

  // const getDate=(d)=>{
  //   setDate(d)
  // }
  // const getPincode=(p)=>{
  //   setPincode(p)
  // }
  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>
    <Route path="/vaccination" element={<VaccData setDate={setDate} setPincode={setPincode}/>}></Route>
    <Route path="/" element={<Table />}></Route>
    <Route path="/list" element={<SlotList date={date} pincode={pincode} />}></Route>
    
    </Routes>
    
    </div>
    </Router>
    
  );
}

export default App;
