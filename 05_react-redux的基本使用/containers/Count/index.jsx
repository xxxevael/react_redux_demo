//引入Count的UI组件
import CountUI from "../../components/Count";
//引入action
import { createIncrementAction,
  createDecrementAsyncAction,
  createDecrementAction} from "../../redux/count_action";
//引入connect用于链接UI组件与redux
import { connect } from "react-redux";

//mapStateToProps函数返回的是一个对象
//返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
//mapStateToProps用于传递状态
function mapStateToProps(state){
  return {count:state}
}

//mapDispatchToProps函数返回的是一个对象
//返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
//mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps(dispatch){
  return {
    // increment:(data)=>{
    //   //通知redux执行加法
    //   dispatch(createIncrementAction(data))
    // }}
      increment:data=>dispatch(createIncrementAction(data)),
      decrement:data=>dispatch(createDecrementAction(data)),
      incrementAsync:(data,time)=>dispatch(createDecrementAsyncAction(data,time)),
    }
}

//使用connect()() 创建并暴露一个Count的容器组件
export default  connect(mapStateToProps,mapDispatchToProps)(CountUI)

