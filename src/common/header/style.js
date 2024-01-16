import styled from 'styled-components'
import logoPic from '../../statics/jslogo.png'

export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
    position:relative
    z-index:1;
`
export const Logo = styled.div`  
  position:absolute;
  top:0;
  left:0;
  display:block;
   width:100px;
   height:56px;
   background:url(${logoPic});
   background-size:contain
`
export const Nav = styled.div`
  width:960px;
  margin:0 auto;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
`
export const NavItem = styled.div`
   line-height:56px;
   padding:0 15px;
   font-size:17px;
   color:#333;
   &.left {
     float:left;
   }
   &.right {
     float:right;
     color:#969696;
   }
   &.active{
     color:#ea6f5a;
   }  
`
export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .zoom {
     position:absolute;
     right:5px;
     bottom:5px;
     width:30px;
     line-height:30px;
     text-align:center;
     border-radius:15px;
     cursor:pointer;
     &.focused{
        background:#777;
        color:#fff;
     }
  }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
   box-sizing:border-box;
   width:160px;
   height:38px;
   padding:0 30px 0 20px;
   margin-top:9px;
   border:none;
   outline:none;
   border-radius:19px;
   background:#eee;
   font-size:15px; 
   color:#666;
   margin-left:20px;
   &::placeholder {
      color:#999;
   }
   &.focused {
    width:240px;
   }
   
    &.slide-enter {
        width:160px;
        transition:all .2s ease-out;
     }
     &.slide-enter-active{
        width:240px;
     }
     &.slide-exit{
       transition:all .2s ease-out;
     }
     &.slide-exit-active {
        width:160px;
     }
 
`

export const Addition = styled.div`
   position:absolute;
   right:0;
   top:0;
   height:56px;
`
export const Button = styled.div`
   float:right;
   line-height:38px;
   margin-top:9px;
   border-radius:19px;
   border:1px solid #ec6149;
   margin-right:20px;
   padding:0 20px;
   &.reg{
      color:#ec6149;
   }
   &.writing{
      color:#fff;
      background:#ec6149;
   }
`
export const SearchInfo = styled.div`
   position:absolute;
   left:0;
   top:56px;
   width:240px;
   padding:0 20px;
   box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`
export const SearchInfoSwitch = styled.span`
   float:right;
   font-size:14px;
   cursor:pointer;
   .spin{
      display:block;
      float:left;
      margin-right:5px;
      vertical-align: -1px;
      transition:all .2s ease-in;
      transform:rotate(0deg);
      transform-origin:center center;
   }
`
export const SearchInfoItem = styled.a`
  font-size:12px;
  line-height:20px;
  color:#333;
  border:1px solid #ddd;
  padding:0 5px; 
  border-radius:3px;
  display:block;
  float:left;
  cursor:pointer;
  margin-right:10px;
  margin-bottom:15px;
`
export const SearchInfoList = styled.div`
  overflow:hidden;
`
