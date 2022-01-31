import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import './slot.css'
export default function SlotList(props)
{
    const[arr,setArr]=useState([]);
  
  const getArray=async()=>{
    const data=await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${props.pincode}&date=${props.date}`)
    console.log(data);
    const actualData=await data.json();
    console.log(actualData.sessions);
    setArr(actualData.sessions);
  }
//   console.log(location.state.sessions);
useEffect(()=>{
    getArray();
//   console.log(arr)
},[])
    return(
        <>
        <div className='container-fluid mt-5'>
        <div className='main-heading text-center'><h1>Available Slots</h1></div>
        <div className='mt-5 text-center'><button type="button" className="btn-sm btn-color1">COVAXIN</button><br/>
        <button  type="button" className="mt-2 btn-sm btn-color2">COVISHIELD</button></div>
        <table className='table mt-5 table-responsive'>
        <thead>
        <tr>
          <th scope="col">Sno.</th>
          <th scope="col">Center Name</th>
          <th scope="col">Address</th>
          <th scope="col">Vaccine</th>
           <th scope="col">Fee Type</th>
          <th scope="col">Min Age Limit</th>
          <th scope="col" >No. of slots (Dose 1)</th>
          <th scope="col" >No. of slots (Dose 2)</th>
        </tr>
      </thead>
      <tbody>
      
      {
        arr!==undefined?arr.map((item,ind)=>{
          return(<tr  key={ind}>
              <th scope="row">{ind}</th>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td style={{backgroundColor:item.vaccine==='COVAXIN'?'#74fc8d':'#05f0fc'}}>{item.vaccine}</td>
          <td >{item.fee_type}</td>
          <td >{item.min_age_limit}</td>
          <td >{item.available_capacity_dose1}</td>
          <td >{item.available_capacity_dose2}</td>
          
        </tr>)
        }):<div><h1  className='text-center'>Oops! No slot available</h1></div>
    }
     
      
      </tbody>
        </table>
        </div>
        <div className='mt-5 mb-5 text-center'>
        <a className="btn btn-primary" href= "https://selfregistration.cowin.gov.in/" >Book Now</a>
        </div>
        </>
    )
}