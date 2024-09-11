import React, { useEffect } from 'react'
import { fetchImageList } from '../Redux/img/Action'
import { connect } from 'react-redux'

const Imggallery = (props) => {
    useEffect(()=>{
        props.fetchimages()
    })
  return props.imglist.loading?(
    <h2>Loading</h2>
    
  ):props.imglist.err?
  (
    <h2>{props.imglist.err}</h2>
  ):(
    <div>
        <h2>Image List</h2>
        {
            props.imglist && props.imglist.data &&
            props.imglist.data.map(item=><div>{item.title}</div>)
        }
    </div>
  )
}
const mapStateToProps =(state)=>{
    return{
        imglist:state.imglist
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        fetchimages:()=>dispatch(fetchImageList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Imggallery)
