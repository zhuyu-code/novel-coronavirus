import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import * as actionCreators from './store/actionCreators';
import { Table, Input, Select ,Button,Spin,DatePicker} from 'antd';
import "./index.css";

const { Option } = Select;
const columns = [
    {
      title: '日期',
      dataIndex: 't_date',
      key: 't_date',
      align:"center",
      render:(text,record)=>{
      return (<span>{record.t_date.slice(5)}</span>)
      }
    },
    {
      title: '车次/航班',
      dataIndex: 't_no',
      key: 't_no',
      width:"24%",
      align:"center",
    },
    {
      title: '始发站',
      dataIndex: 't_pos_start',
      key: 't_pos_start',
      ellipsis:true,
      align:"center",
    },
    {
        title: '终点站',
        dataIndex: 't_pos_end',
        key: 't_pos_end',
        ellipsis:true,
        align:"center",
      },
      {
        title: '查看详情',
        dataIndex: 'detail',
        key: 'detail',
        width:"20%",
        align:"center",
        render:(text,record)=>{
            return (<a style={{color:"#000"}} href={record.source}>详情</a>)
        }
      }
  ];
function DistanceQuery(props){
    const {DistanceDataList,getDistanceDispatch}=props;
    const [current, setCurrent] = useState(1);
    const [carNum,setCarNum]=useState("");
    const [place,setPlace]=useState("");
    const [date,setDate]=useState("");
    useEffect(()=>{
        if(!DistanceDataList.size){
            getDistanceDispatch({page:1,pageSize:10});
        }
        
    },[])
    let DistanceDataListJS=DistanceDataList?DistanceDataList.toJS():[];

    let MadeCurrent=(page)=>{
        setCurrent(page.current);
        getDistanceDispatch({page:current+1,pageSize:10})
    }
    let changeInputCarNum=(e)=>{
            setCarNum(e.target.value);
        }
        let changeInputPlace=(e)=>{
            setPlace(e.target.value);
        }
        let changeInputDate=(date, dateString)=>{
            console.log("打印");
            console.log(dateString);
           setDate(dateString)
        }

    function FindDistanceData(){
        getDistanceDispatch({page:1,pageSize:10,carNum,place,date});
         DistanceDataListJS=DistanceDataList?DistanceDataList.toJS():[];
    }
    return (
        <div className="main">
            <Input id="carNum" className="car"  placeholder="车次/车牌/航班/场所" value={carNum} onChange={changeInputCarNum}/>
            <div className="content">
                <Input  id="place" className="item1" placeholder="地点/成都" value={place} onChange={changeInputPlace}/>
                <DatePicker  id="date" className="item2" placeholder="请选择日期"  onChange={changeInputDate}/>
            </div>
            <Button style={{width:"90vw",margin:"10px 0",}} type="primary" onClick={FindDistanceData}>查询</Button>
            {Object.keys(DistanceDataListJS).length ?
            (
                <Table style={{fontSize:"12px"}}
                columns={columns}
                pagination={{defaultPageSize:10,current:current,total:DistanceDataListJS.len, pageSizeOptions:['10','20','30','40','50']}} 
                dataSource={DistanceDataListJS.allData}
                onChange={MadeCurrent}
                />
              )
            :<Spin tip="加载中..."/>}
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
      getDistanceDispatch (params) {
         dispatch(actionCreators.getDistanceList(params));
      },
    }
  };
  export default connect (mapStateToProps, mapDispatchToProps)(React.memo(DistanceQuery));
  