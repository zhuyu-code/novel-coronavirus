//routes/index.js
import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../application/Home';
import NcovMap from '../application/NcovMap';
import NcovWorld from '../application/NcovWorld';
import NcovTrend from '../application/NcovTrend';
import DistanceQuery from '../application/DistanceQuery'

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/ncovmap"}/>
        )
      },
      {
        path: "/ncovmap",
        component: NcovMap
      },
      {
        path: "/ncovworld",
        component: NcovWorld
      },
      {
        path: "/ncovtrend",
        component: NcovTrend
      },
      {
          path: "/distancequery",
          component:DistanceQuery
      }
    ]
  }
]