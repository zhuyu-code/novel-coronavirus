//src/appliction/Home/index.js
import React,{useEffect} from 'react';
import { connect } from "react-redux";
import * as actionCreators from './store/actionCreators';
import { Table,Spin } from 'antd';

const columns = [
  {
    title: <span style={{paddingLeft:"20px"}}>省市</span>,
    dataIndex: 'provinceShortName',
    key: 'provinceShortName',
    width: '40%',
    render:(text, record)=>{
      if(record.provinceShortName){
      return <span>{record.provinceShortName}</span>
      }else{
        return <span>{record.cityName}</span>
      }
    }
  },
  {
    title: '确诊',
    dataIndex: 'confirmedCount',
    key: 'confirmedCount',
    width: '20%',
  },
  {
    title: '死亡',
    dataIndex: 'deadCount',
    width: '20%',
    key: 'deadCount',
  },
  {
    title: '治愈',
    dataIndex: 'curedCount',
    width: '20%',
    key: 'curedCount',
  },
];

function NcovMap (props) {
  const {mainDataList,getMainDataDispatch}=props;
  useEffect(()=>{
    if(!mainDataList.size){
      getMainDataDispatch();
    }
  },[])

  const mainDataListJS=mainDataList ? mainDataList.toJS():[];
  return (
    <div style={{textAlign:"center"}}>
      {
        mainDataListJS.length?(<Table columns={columns} childrenColumnName='cities'  dataSource={mainDataListJS} pagination={false}/>):
        ( <Spin tip="加载中..." style={{marginTop:"100px"}}/>)
      }
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
