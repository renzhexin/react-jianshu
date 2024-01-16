import axios from 'axios';
import * as actionType from './actionTypes'


const changeDetail = (result)=>({
    type:actionType.CHANGE_DETAIL,
    result
})

export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id)
            .then(res=>{
                const result = res.data.data;
                dispatch(changeDetail(result))
            })
    }
}
