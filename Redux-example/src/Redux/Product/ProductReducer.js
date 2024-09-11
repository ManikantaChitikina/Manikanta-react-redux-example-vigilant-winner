import { BUY_BAT, BUY_PAD, MAKE_ORDER } from "./ActionTypes"
// const initialState={
//     noOfBats:100,
//     noOfPad:100
// }
const initialBatState={
    noOfBats:100
    
}
const initialPadState={
    noOfPad:100
}
export const batreducer=(state=initialBatState,action)=>{
    switch(action.type){
        case BUY_BAT:return{
            ...state,
            // noOfBats:state.noOfBats-1
            noOfBats:state.noOfBats-action.payload
        }
        
        default:return state
    }

}
export const padreducer=(state=initialPadState,action)=>{
    switch(action.type){
         case BUY_PAD:return{
            ...state,
            noOfPad:state.noOfPad-1
        }
        default:return state
    }

}
// export default productreducer