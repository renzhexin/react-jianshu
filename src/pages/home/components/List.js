import React,{useEffect} from 'react';
import { connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { ListItem, ListInfo,LoadMore} from '../style'
import { actionCreators } from '../store'
const List = (props)=>{

    const { articleList, getMoreList,page} = props;


    return (
        <div>
            {
                articleList.map((item,index)=>
                    <Link to={'/detail/'+item.get('id')}>
                        <ListItem key={index}>
                            <img className="pic" src={item.get('imgUrl')} alt=""/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                )
            }
            <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>

        </div>

    )
}

const mapStat = (state)=>({
    articleList:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})

const mapDispath = (dispatch)=>({
    getMoreList(page) {
        const action = actionCreators.getMoreList(page);
        dispatch(action)
    }
})

export default connect(mapStat,mapDispath)(List)
