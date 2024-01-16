import React,{useEffect,useRef} from 'react';
import Topic from './components/Topic'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
}
from './style'


const Home = (props)=>{
    const { showScroll,changeScrollTopShow } = props;

    const unmounted = useRef();
    unmounted.current = changeScrollTopShow();

    useEffect(()=>{
        props.changeHomeData();
        changeScrollTopShow();
        nums();
    },[])


   const handleScrollTop = ()=>{
        window.scrollTo(0,0);
   }

   const nums = ()=>{
        //组件销毁 取消监听scroll
       if(unmounted.current) {
           window.removeEventListener('scroll')
       }
   }

    return (
        <HomeWrapper>
            <HomeLeft>
                <img className="banner-img" src="//upload-images.jianshu.io/upload_images/7190121-750d12d141de3e5c.JPEG?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" />
                <Topic/>
                <List/>
            </HomeLeft>
            <HomeRight>
                <Recommend/>
                <Writer/>
            </HomeRight>
            {
                showScroll && <BackTop onClick={handleScrollTop}>回到顶部</BackTop>
            }

        </HomeWrapper>
    )
}

const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispathToProps = (dispath)=>({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispath(action)
    },
    changeScrollTopShow () {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 400) {
                dispath(actionCreators.toggleTopShow(true))
            }else {
                dispath(actionCreators.toggleTopShow(false))
            }
        })
    }
})
export default connect(mapState,mapDispathToProps)(Home)
