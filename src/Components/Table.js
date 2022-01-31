import React, {useState, useEffect} from 'react'
import './Table.css'

export default function Table()
{
  

    const[data,setData]=useState([]);
    const getData=async()=>{
        const res=await fetch('https://data.covid19india.org/data.json');
        const actualData=await res.json();
        // console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(()=>{
        getData();
      
    },[])
    return(
        <>
        <div className='container-fluid mt-5'>
        <div className='main-heading text-center mb-5'><h1><span className='india'>INDIA</span> COVID Update</h1></div>
        <table className='table table-responsive'>
        <thead>
    <tr>
      <th scope="col">Sno.</th>
      <th scope="col">Country</th>
      <th scope="col">Confirmed cases</th>
      <th scope="col">Active cases</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
    </tr>
  </thead>
  <tbody>
  {
      

    data.map((item,ind)=>{
        
           //item[key] gives you access to each value
           
           return(<tr className={ind===0?'table-primary':null} key={ind}>
            <th scope="row">{ind}</th>
            <td>{item.state}</td>
            <td>{item.confirmed}</td>
            <td>{item.active}</td>
            <td className='green-hover'>{item.recovered}</td>
            <td className='red-hover'>{item.deaths}</td>
          </tr>)
           
        })
    

      
        
      
  }
  </tbody>
        </table>
        </div>
        </>
    )
}