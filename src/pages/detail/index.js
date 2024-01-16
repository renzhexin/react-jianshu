import React,{useEffect } from 'react';
import { connect } from 'react-redux'
import {DetailWrapper,Header,Content} from './style'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'

const Detail = (props)=>{
    const {title,content,getDetail}  = props

    console.log();
    const id = props.match.params.id

    useEffect(()=>{
        getDetail(props.match.params.id)
    },[])
    return (
        <DetailWrapper>
            <Header>{title}</Header>
            <Content dangerouslySetInnerHTML={{__html:content}}/>
                {/*{content}*/}
        </DetailWrapper>
    )
}

const mapState = (state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispath = (dispatch)=>{
    return {
        getDetail: (id)=>{
            dispatch(actionCreators.getDetail(id))
        }
    }
}
export default connect(mapState,mapDispath)(withRouter(Detail))
