import { FETCH_IMG_FAILURE, FETCH_IMG_REQUEST, FETCH_IMG_SUCCESS } from "./ActionTypes"
import axios from 'axios'
const fetchImaRequest=()=>{
return{
type:FETCH_IMG_REQUEST
}
}
const fetchImgSuccess=(data)=>{
    return{
    type:FETCH_IMG_SUCCESS,
    payload:data
    }
    }
const fetchImgFailure=(err)=>{
        return{
        type:FETCH_IMG_FAILURE,
        payload:err
        }
        }
export const fetchImageList=()=>{
    return(dispatch)=>{
        dispatch(fetchImaRequest);
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res=>{
            dispatch(fetchImgSuccess(res.data))
        })
        .catch(err=>{
            dispatch(fetchImgFailure(err.message))
        })

    }
}