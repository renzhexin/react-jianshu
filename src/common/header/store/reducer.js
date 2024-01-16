import * as actionType from './actionTypes'
import { fromJS } from 'immutable';

// immutable库
//immutable对象
const defaultState = fromJS({
    focused :false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
})

export default (state=defaultState,action)=>{
    // const newStore = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionType.SEARCH_FOCUS:
            //immutable对象的set方法，会结合之前immutable对象的值和之前设置的值，返回一个全新的对象
            return state.set('focused',true)


        case actionType.SEARCH_BLUR:
            return state.set('focused',false)
            // return {
            //     focused :false
            // }
        case actionType.CHANGE_LIST:
            // return state.set('list',action.data).set('totalPage',action.totalPage)
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case actionType.MOUSE_ENTER:
            return state.set('mouseIn',true)
        case actionType.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case actionType.CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state
    }
}
