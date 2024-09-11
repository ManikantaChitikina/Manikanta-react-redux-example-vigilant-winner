import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { buyBat } from '../Redux/Product/ProductAction';

const PayloadProduct = () => {
    const noOfBats=useSelector(state=>state.bat.noOfBats);
    const dispatch=useDispatch();
    const[productcount,countChange]=useState(1)
  return (
    <div>
      <h2>Available bat-{noOfBats}</h2>
        <br></br>
        <input value={productcount} onChange={e=>countChange(e.target.value)}></input>
        <button onClick={()=>{dispatch(buyBat(productcount))}}>Buy bat</button>
    </div>
  )
}

export default PayloadProduct
