import React from 'react';
import {connect} from 'react-redux'
import {TopicWrapper,TopicItem} from '../style'
const Topic = (props)=>{
    const { topicList }  = props;

    return (
        <TopicWrapper>
            {
                topicList.map(item=>
                    <TopicItem key={item.get('id')}>
                        <img className="topic-pic" src={item.get('imgUrl')} alt=""/>
                        {item.get('title')}
                    </TopicItem>
                )
            }


        </TopicWrapper>
    )
}
const mapStateToProps = (state)=>({
    topicList:state.getIn(['home','topicList'])
})
export default connect(mapStateToProps,null)(Topic)
