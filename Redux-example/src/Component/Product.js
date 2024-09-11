import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { makeOrder } from '../Redux/Product/ProductAction';
import { BUY_BAT } from '../Redux/Product/ActionTypes';
const Product = () => {
    const noOfBats=useSelector(state=>state.bat.noOfBats);
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Hooks example</h1>
      <h2>Available cricket bat-{noOfBats}</h2>
      <button onClick={()=>{dispatch(makeOrder(BUY_BAT))}}>Buy bat</button>

    </div>
  )
}

export default Product
