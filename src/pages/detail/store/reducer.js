import * as actionType from './actionTypes'
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

// immutable库
//immutable对象
const defaultState = fromJS({
    title:'',
    content:''
})

export default (state=defaultState,action)=>{
    // const newStore = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            console.log(action);
            // state.set('title',action.result.title)
           return state.merge({
                title:action.result.title,
                content:action.result.content
            })
        default:
            return state
    }
}
