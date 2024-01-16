// import  { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable'
import {reducer as headerRecucer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store';

export default combineReducers({
    header:headerRecucer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
})
