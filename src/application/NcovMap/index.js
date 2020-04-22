//src/appliction/Home/index.js
import React,{useEffect} from 'react';
import { connect } from "react-redux";
import * as actionCreators from './store/actionCreators';

function NcovMap (props) {
  const {mainDataList,getMainDataDispatch}=props;
  useEffect(()=>{
    getMainDataDispatch();
  },[])

  const mainDataListJS=mainDataList ? mainDataList.toJS():[];
  console.log("内容")
  console.log(mainDataListJS);
  return (
    <div>
      NcovMap
    </div>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  mainDataList: state.getIn(['ncovmap','mainData']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getMainDataDispatch () {
       dispatch(actionCreators.getMainDataList());
    }
  }
};
export default connect (mapStateToProps, mapDispatchToProps)(React.memo (NcovMap));
