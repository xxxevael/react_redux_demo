/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */
// 引入combineReducers 专门用于汇总多个reducer
import { combineReducers } from "redux";
// 引入为Count 组件服务的reducer
import count from './count'
// 引入为Person 组件服务的reducer
 import persons from "./person";

  //汇总所有的reducer变成一个总的reducer
  export default combineReducers({
    count,
    persons
   })
