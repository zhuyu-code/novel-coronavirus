//src/appliction/Home/index.js
import React,{useEffect} from 'react';
import { renderRoutes } from "react-router-config";
import {Top, Tab, TabItem,} from './style';
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转
import * as actionCreators from './store/actionCreators';
import "swiper/css/swiper.css";
import Swiper from "swiper";
import {connect} from 'react-redux';


function Home (props) {
    const { route } = props;
    const {SwiperDataList,getSwiperDispatch}=props;
    useEffect(() => {
      if(!SwiperDataList.size){
        getSwiperDispatch();
      }
    }, [])
    useEffect(() => {
      let newSlides=[];
      //初始化内容
      let SwiperDataListJS=SwiperDataList?SwiperDataList.toJS():[];
      if(SwiperDataListJS.length!==0){
        newSlides=SwiperDataListJS.map(res=>{
          return (
            `<a href="${res.defaultJumpUrl}"  style="margin:10px 10px;width:106px;height:66px;
            display:flex;justify-content:center;align-items:center;background-color:${res.bgColor};
            border-radius:6px;">
            <div style="text-align:center">
            <img style="width:25px;height:25px;margin-bottom:5px" src="${res.icon}"/>
            <div style="color:${res.contentColor};font-size:13px">${res.content}</div>
            </div>
            </a>`
          )
        })
      }
      new Swiper('.swiper-container', {
        slidesPerView: 3,
        autoplay:true,
        centeredSlides: true,
        virtual: {
            slides:newSlides||[],
        }

    })
     
    }, [SwiperDataList])
     
  return (
    <div>
        <Top/>
        <div className='new'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    </div>
                </div>
            </div>      
        <Tab>
        <NavLink to="/ncovmap" activeClassName="selected"><TabItem><span > 中国疫情 </span></TabItem></NavLink>
        <NavLink to="/ncovworld" activeClassName="selected"><TabItem><span > 世界疫情 </span></TabItem></NavLink>
        <NavLink to="/ncovtrend" activeClassName="selected"><TabItem><span > 实时播报 </span></TabItem></NavLink>
        <NavLink to="/distancequery" activeClassName="selected"><TabItem><span > 同程查询 </span></TabItem></NavLink>
        </Tab>
        { renderRoutes (route.routes) }
    </div>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  SwiperDataList: state.getIn(['swiper','swiperData']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getSwiperDispatch () {
       dispatch(actionCreators.getSwiperList());
    }
  }
};
export default connect (mapStateToProps, mapDispatchToProps)(React.memo(Home));
