import axios from 'axios'
import * as actionTypes from './actionTypes'
import {fromJS,List} from 'immutable'

const changeHomeData = (result)=>({
    type:actionTypes.CHANGE_HOME_LIST,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
})

const addHomeList = (result,nextPage)=>({
    type:actionTypes.GET_MORE_LIST,
    list:fromJS(result),
    nextPage
})

export const getHomeInfo =() =>{
   return (dispatch)=>{
       axios.get('/api/home.json')
           .then(res=>{
               const result = res.data.data;
               dispatch(changeHomeData(result))
           })
   }
}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page)
            .then(res=>{
                const result = res.data.data;
                dispatch(addHomeList(result,page+1))
            })
    }
}

export const toggleTopShow = (flag)=>({
    type:actionTypes.TOGGLE_SCROLL_TOP,
    flag
})
