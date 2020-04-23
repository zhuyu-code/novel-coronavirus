import React,{useEffect} from 'react';
import { connect } from "react-redux";
import * as actionCreators from './store/actionCreators';
import { Table, Input, Select } from 'antd';
import "./index.css"

const { Option } = Select;
const columns = [
    {
      title: '日期',
      dataIndex: 't_date',
      key: 't_date',
      render:(text,record)=>{
      return (<span>{record.t_date.slice(5)}</span>)
      }
    },
    {
      title: '车次/航班',
      dataIndex: 't_no',
      key: 't_no',
      width:"24%",
    },
    {
      title: '始发站',
      dataIndex: 't_pos_start',
      key: 't_pos_start',
      ellipsis:true
    },
    {
        title: '终点站',
        dataIndex: 't_pos_end',
        key: 't_pos_end',
        ellipsis:true
      },
      {
        title: '详情',
        dataIndex: 'detail',
        key: 'detail',
        render:(text,record)=>{
            return (<a style={{color:"#000"}} href={record.source}>详情</a>)
        }
      }
  ];

function DistanceQuery(props){
    const {DistanceDataList,getDistanceDispatch}=props;
    useEffect(()=>{
        getDistanceDispatch();
    },[])
    let DistanceDataListJS=DistanceDataList?DistanceDataList.toJS():[];
    return (
        <div className="main">
            <Input id="car"/>
            <div className="content" placeholder="车次/车牌/航班/场所">
                <Input className="item1"/>
                <Select className="item2" defaultValue="lucy" >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </div>
            <Table style={{fontSize:"12px"}} columns={columns} dataSource={DistanceDataListJS}/>
        </div>
    )
}
// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
    // 不要在这里将数据 toJS
    // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
    DistanceDataList: state.getIn(['distance','distanceData']),
  });
  // 映射 dispatch 到 props 上
  const mapDispatchToProps = (dispatch) => {
    return {
      getDistanceDispatch () {
         dispatch(actionCreators.getDistanceList());
      }
    }
  };
  export default connect (mapStateToProps, mapDispatchToProps)(React.memo(DistanceQuery));
  