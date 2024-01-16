// import * as actionType from './actionTypes'
import { fromJS } from 'immutable';
import * as actionTypes from "./actionTypes";
// immutable库
//immutable对象
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false
})

export default (state=defaultState,action)=>{
    // const newStore = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.CHANGE_HOME_LIST:
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            })
        case actionTypes.GET_MORE_LIST:
            console.log(action);
            return state.merge({
                articleList:state.get('articleList').concat(action.list),
                articlePage:action.nextPage
            })

        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.flag)
        default:
            return state
    }
}
