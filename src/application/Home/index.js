//src/appliction/Home/index.js
import React from 'react';
import { renderRoutes } from "react-router-config";
import {Top, Tab, TabItem,} from './style';
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转

function Home (props) {
    const { route } = props;
  return (
    <div>
        <Top/>
        <Tab>
        <NavLink to="/ncovmap" activeClassName="selected"><TabItem><span > 中国疫情 </span></TabItem></NavLink>
        <NavLink to="/newmessage" activeClassName="selected"><TabItem><span > 世界疫情 </span></TabItem></NavLink>
        <NavLink to="/ncovtrend" activeClassName="selected"><TabItem><span > 实时播报 </span></TabItem></NavLink>
        <NavLink to="/distancequery" activeClassName="selected"><TabItem><span > 同程查询 </span></TabItem></NavLink>
        </Tab>
        { renderRoutes (route.routes) }
    </div>
  )
}

export default React.memo (Home);