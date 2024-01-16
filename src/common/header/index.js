import React,{Fragment,useState,useEffect}from 'react'
import {connect} from 'react-redux';
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button
} from './style'
// CSSTransition只能包裹一个子元素否则会报错
import {CSSTransition } from "react-transition-group";

const Header = (props)=>{

    // const [spinIcon,setSpinIcon ] = useState('')


    const {
        list,
        handleInputFocus,
        handleInputBlur,
        handleMouseEnter,
        handleMouseLeave,
        handleChangePage,
        focused,
        page,
        totalPage,
        mouseIn,
        login,
        logout
    } = props;

    const newList = list.toJS(); //immutable数组转化成js数组
    let pageList = []

    if(newList.length>0) {
        for(let i = (page-1)*10;i<page*10;i++) {
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
    }


    let spinIcon = '';
    const getListArea= ()=>{
        if(focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={()=>handleChangePage(page,totalPage,spinIcon)}>
                            <i ref={(icon)=>spinIcon = icon} className="iconfont iconspin spin"></i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        return null;
    }

    return (
        <Fragment>
            <HeaderWrapper>
                <Link to="/">
                 <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    {
                        login ?
                            <Link to="/login"><NavItem className="right" onClick={logout}>退出</NavItem></Link>
                            :
                            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont iconAa"></i>
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={props.focused}
                            classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' :''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i  className={focused ? 'iconfont iconfangdajing focused zoom' :'iconfont iconfangdajing zoom'}></i>
                        {getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                      <Button className="writing"><i className="iconfont iconPensyumaobi"></i>写文章</Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        </Fragment>
    )
}
const mapStateToProps = (state)=>{
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        // focused:state.get('header').get('focused')
        login:state.getIn(['login','login'])
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        handleInputFocus:(list)=>{
            // 没数据才去请求
            list.size == 0 && dispatch(actionCreators.getList())
            // const action = actionCreators.searchFocus()
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur:()=>{
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter:()=>{
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave:()=>{
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage:(page,totalPage,spin)=>{
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle) {
                originAngle = parseInt(originAngle,10)
            }else {
                originAngle = 0;
            }

            console.log(originAngle);
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';


            if(page<totalPage) {
                dispatch(actionCreators.changePage(page+1))
            }else {
                dispatch(actionCreators.changePage(1))
            }

        },
        logout:()=>{
            dispatch(loginActionCreators.logout())
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
