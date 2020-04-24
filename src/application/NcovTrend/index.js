import React,{useEffect} from 'react';
import { Timeline, Spin} from 'antd';
import {Squa,Main} from './style';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';

function NcovTrend(props){
    const {TrendDataList,getTrendDataDispatch}=props;
    useEffect(()=>{
        if(!TrendDataList.size){
            getTrendDataDispatch();
        }
    },[])
    const TrendDataListJS=TrendDataList?TrendDataList.toJS():[];
    console.log(TrendDataListJS);
    return (
       <Main>
        {
            TrendDataListJS.length?(<Timeline>
                {
                    TrendDataListJS.map((res)=>{
                        return (
                            <Timeline.Item>
                            <div>{res.lmodify}</div>
                            <Squa href={res.url}>
                                <div>{res.title}</div>
                            </Squa>
                            </Timeline.Item>
                        )
                    })
                }
            </Timeline>):(<div style={{textAlign:"center"}}><Spin style={{marginTop:"100px"}} tip="加载中..."/></div>)
        }
       </Main>
    )
}
// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  TrendDataList: state.getIn(['ncovtrend','trendData']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getTrendDataDispatch () {
       dispatch(actionCreators.getNcovTrendList());
    }
  }
};
export default connect (mapStateToProps, mapDispatchToProps)(React.memo (NcovTrend));
