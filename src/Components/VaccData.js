import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function VaccData(props)
{
  const[pincode,setPincode]=useState();
 
  const[date,setDate]=useState();
 

  const navigate = useNavigate();
  
const handlePincode=async(e)=>{
    e.preventDefault();
    if(date===undefined || pincode===undefined){
      navigate('/vaccination')
    }
    else{
      var day=date.substr(8,2);
      var mid=date.substr(4,4);
      var year=date.substr(0,4);
      const d=day+mid+year;
      
  props.setDate(d);
  props.setPincode(pincode);
  console.log(d);
  console.log(pincode);
  navigate('/list');
    }
  
}



    
    return(
        <>
        <div className='container mt-5'><form >
        <div className="mb-3">
          <label 
          htmlFor="pincode" className="form-label">Pincode</label>
          <input onChange={e => setPincode(e.target.value)}  type="text" className="form-control" id="pincode" aria-describedby="emailHelp" required/>
         
        </div>
        <div className="mb-3">
          <label 
          htmlFor="date" className="form-label">Date</label>
          <input onChange={e => setDate(e.target.value) }  type="date" className="form-control" id="date" required/>
         
        </div>
       
       <div className='mt-5 text-center'><button onClick={handlePincode} type="submit" className="btn btn-primary">Check by pincode</button></div> 
        
      </form>  </div>
        

     
        
  
      

 
      
        </>
    )
}