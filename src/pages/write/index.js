import React,{useEffect,useRef } from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

const Write = (props)=>{
    const { login } = props;

    if(login ) {
        return (
          <div>写文章</div>
        )
    }else{
        return <Redirect to="/login"/>
    }
}

const mapState = (state)=>({
    login:state.getIn(['login','login'])
})



export default connect(mapState,null)(Write)
