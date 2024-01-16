import React from 'react';
import { connect } from 'react-redux'
import {RecommendWrapper,RecommendItem} from '../style'
const Recommend = (props)=>{
    const { recommendList } = props;
    console.log(recommendList);
    return (
        <RecommendWrapper>
            {
                recommendList.map(item=><RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>)
            }
        </RecommendWrapper>
    )
}
const mapState = (state)=>(
    {
        recommendList:state.getIn(['home','recommendList'])
    }
)
export default connect(mapState,null)(Recommend)
