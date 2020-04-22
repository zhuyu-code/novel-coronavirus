//routes/index.js
import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../application/Home';
import NcovMap from '../application/NcovMap';
import NewMessage from '../application/NewMessage';
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
        path: "/newmessage",
        component: NewMessage
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