import React, { Component } from 'react'
//引入action
import { createIncrementAction,
  createDecrementAsyncAction,
  createDecrementAction} from "../../redux/actions/count";
//引入connect用于链接UI组件与redux
import { connect } from "react-redux";

//定义UI组件
class CountUI extends Component {
  state ={carName :'Benzc63'}


  increment=()=>{
    const {value} = this.selectNumber
    this.props.increment(value*1)
  }
  decrement=()=>{
    const {value} = this.selectNumber
    this.props.decrement(value*1)

  }
  incrementIfOdd=()=>{
    const {value} = this.selectNumber
    if(this.props.count%2!==0){
      this.props.increment(value*1)
    }
  }
  incrementAsync=()=>{
    const {value} = this.selectNumber
    this.props.incrementAsync(value*1,500)
  }
  render() {
    return (
      <div>
        <h2>我是count组件,下方总人数为{this.props.renshu}</h2>
        <h4>当前求和为：{this.props.count}</h4>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

//使用connect()() 创建并暴露一个Count的容器组件
export default connect(
  state=>({count:state.he,renshu:state.rens.length}),
  //mapDispatchToProps 的一般写法
  // dispatch=>({
  //   increment:data=>dispatch(createIncrementAction(data)),
  //   decrement:data=>dispatch(createDecrementAction(data)),
  //   incrementAsync:(data,time)=>dispatch(createDecrementAsyncAction(data,time)),
  // })

  //mapDispatchToProps 的简写
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createDecrementAsyncAction,
  }
)(CountUI)

