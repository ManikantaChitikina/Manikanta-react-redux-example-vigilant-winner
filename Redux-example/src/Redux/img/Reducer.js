import { FETCH_IMG_REQUEST,FETCH_IMG_SUCCESS,FETCH_IMG_FAILURE } from "./ActionTypes"
const initialState={
    loading:true,
    data:[],
    error:''
}
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_IMG_REQUEST:return{
            ...state,
            loading:true
        }
        case FETCH_IMG_SUCCESS :return{
            loading:false,
            data:action.payload,
            error:''
        }
        case FETCH_IMG_FAILURE :return{
            loading:false,
            data:[],
            error:action.payload

        }
        default:return state
    }
}
export default Reducer