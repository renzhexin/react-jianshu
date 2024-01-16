import axios from 'axios'
import * as actionTypes  from './actionTypes'

export const logout = ()=>({
    type:actionTypes.LOGOUT,
    value:false
})

export const login  = (username,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?username='+username+'&password='+password )
            .then(res=>{
                // dispatch(res.data.data)
                const result = res.data.data;
                if(result) {
                    dispatch({type:actionTypes.CHANGE_LOGIN,value:true})
                }
                else {
                    alert('登录失败！')
                }
            })
    }
}
