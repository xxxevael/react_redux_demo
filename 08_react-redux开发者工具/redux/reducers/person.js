import { ADD_PERSON } from "../constant";

const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState=initState,action){

  const {type,data} = action

  switch (type) {
    case ADD_PERSON:
      //这样写reducer就不是一个纯函数
      //preState.unshift(data)
      return [data,...preState]
  
    default:
      return preState
  }
}