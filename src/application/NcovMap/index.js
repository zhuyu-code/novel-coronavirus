//src/appliction/Home/index.js
import React,{useEffect} from 'react';
import { connect } from "react-redux";
import * as actionCreators from './store/actionCreators';
import { Table } from 'antd';

const columns = [
  {
    title: '省市',
    dataIndex: 'provinceShortName',
    key: 'provinceShortName',
    width: '25%',
  },
  {
    title: '确诊',
    dataIndex: 'confirmedCount',
    key: 'confirmedCount',
    width: '25%',
  },
  {
    title: '死亡',
    dataIndex: 'deadCount',
    width: '25%',
    key: 'deadCount',
  },
  {
    title: '治愈',
    dataIndex: 'curedCount',
    width: '25%',
    key: 'curedCount',
  },
];

function NcovMap (props) {
  const {mainDataList,getMainDataDispatch}=props;
  useEffect(()=>{
    getMainDataDispatch();
  },[])

  const mainDataListJS=mainDataList ? mainDataList.toJS():[];
  console.log(mainDataListJS);
  return (
    <div>
      <Table columns={columns} childrenColumnName='cities'  dataSource={mainDataListJS} />
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
