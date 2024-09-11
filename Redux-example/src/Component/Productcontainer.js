import React from 'react'
import { connect } from 'react-redux'
import { makeOrder } from '../Redux/Product/ProductAction'
import { BUY_BAT, BUY_PAD } from '../Redux/Product/ActionTypes'
const Productcontainer = (props) => {
  return (
    <div>
    <div>
      <h2>React redux </h2>
      <h2>Available cricket bat-{props.noOfBats}</h2>
      <button onClick={()=>props.makeOrder(BUY_BAT)}>Make order</button>
    </div>
    <div>
      <h2>React redux </h2>
      <h2>Available pad-{props.noOfPad}</h2>
      <button onClick={()=>props.makeOrder(BUY_PAD)}>Make order</button>
    </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        noOfBats:state.bat.noOfBats,
        noOfPad:state.pad.noOfPad
        }
   
}
const mapDispatchToProps=(dispatch)=>{
    return{
        makeOrder:(ProductType)=>dispatch(makeOrder(ProductType))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Productcontainer)
