import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {Table} from 'antd';
import "./index.css";
const columns = [
    {
      title: "国家",
      dataIndex: 'name',
      key: 'name',
      width: '17%',
      align:"center"
    },
    {
      title: '确诊',
      dataIndex: 'conNum',
      key: 'conNum',
      width: '29%',
      align:"center",
      render:(text,record)=>{
      return (<span><span>{record.conNum}</span><span style={{color:"red",fontSize:"10px",marginLeft:"4px"}}>+{record.conadd}</span></span>)
      }
    },
    {
      title: '死亡',
      dataIndex: 'deathNum',
      key: 'deathNum',
      width: '28%',
      align:"center",
      render:(text,record)=>{
        return (<span><span>{record.deathNum}</span><span style={{color:"#791618",fontSize:"10px",marginLeft:"4px"}}>+{record.deathadd}</span></span>)
        }
    },
    {
      title: '治愈',
      dataIndex: 'cureNum',
      width: '28%',
      key: 'cureNum',
      align:"center",
      render:(text,record)=>{
        return (<span><span>{record.cureNum}</span><span style={{color:"green",fontSize:"10px",marginLeft:"4px"}}>+{record.cureadd}</span></span>)
        }
    },
  ];
function NcovWorld(props){
    const {ncovWorldList,getNcovWorldDispatch}=props;
    useEffect(() => {
        getNcovWorldDispatch();
    }, [])
    let ncovWorldListJS=ncovWorldList?ncovWorldList.toJS():[];
    return (
        <div>
           <Table columns={columns} childrenColumnName='cities'  dataSource={ncovWorldListJS} pagination="false"/>
        </div>
    )
}
// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
    // 不要在这里将数据 toJS
    // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
    ncovWorldList: state.getIn(['ncovWorld','ncovWorld']),
  });
  // 映射 dispatch 到 props 上
  const mapDispatchToProps = (dispatch) => {
    return {
      getNcovWorldDispatch () {
         dispatch(actionCreators.getNcovWorldList());
      }
    }
  };
  export default connect (mapStateToProps, mapDispatchToProps)(React.memo (NcovWorld));
  