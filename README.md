# redux 的三个核心概念
- action
1. 动作的对象
2. 包含两个属性
    -  type：标识属性，值为字符串，唯一，必要属性
    -  data：数据属性，值类型任意，可选属性
3. 例子：{type:'ADD_STUDENT',data:{name:"tom",age:18}}

- reducer
1. 用于初始化状态，加工状态
2. 加工时，根据旧的state和action，产生新的state的纯函数

- store
1. 将state、action、reducer联系在一起的对象
2. 如何得到此对象？
    - import {createStore} from 'redux'
    - import reducer from './reducers'
# 1.求和案例_redux精简版
1. 去除Count组件自身的状态
2. src下建立：

``` js
      -src
        -redux
          -store.js
          -count_reducer.js
```
3. store.js
  - 引入redux中的createStore函数，创建一个store
  - createStore调用时要传入一个为其服务的reducer
  - 记得暴露store对象
4. count_reducer.js
  - reducer的本质是一个函数，接收：preState ， action。 返回加工后的状态
  - reducer有两个作用：初始化状态、加工状态
  - reducer被第一次调用时，时store自动触发的，传递的preState时undefined，传递的action是：{type:'@@REDUX/INIT_a.2.b.4'}
5. 在index.js中检测store中状态的改变，一旦发生改变重新渲染
``` js
<App/>
```
备注：redux只负责管理状态，至于状态的改变驱动着页面的展示。要靠我们自己写

# 2.求和案例_redux完整版
新增文件：
1. count_action.js 专门用于创建action对象
2. constant.js 放置容易写错的type值

# 3.求和案例_redux异步action版
1. 明确：延迟的动作不想交给组件自身，想交给action
2. 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
3. 具体编码：
    1. yarn add redux-thunk 并配置再store中
    2. 创建action的函数不在返回一般对象，而是一个函数，该函数中写异步任务
    3. 异步任务有结果后， 分发一个同步的action去真正操作数据
4. 备注:异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action

# 4.求和案例_react-redux基本使用
1. 明确两个概念：
    - UI组件“不能使用任何redux的api，只负责页面的呈现、交互等
    - 容器组件：负责和redux通信，将结果交给UI组件
2. 如何创建一个容器组件--靠react-redux 的connect函数
​
    connect(mapStateToProps,mapDispatchToProps)(UI组件)
    - mapStateToProps：映射状态，返回值是一个对象
    - mapDispatchToProps映射操作状态的方法，返回值是一个对象
3. 备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
4. 备注2：mapDispatchToProps也可以是个对象 

# 5.求和案例_react-redux优化
1. 容器组件和UI组件混成一个文件
2. 无需自己给容器组件传递store，给

``` js
<App/>
```
包裹一个
``` js
<Provider store={store}/>
```
即可
3. 使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
4. mapDispatchToProps 也可以简单的写成一个对象
5. 一个组件要和redux“打交道”要经过那几步？
   1. 定义号UI组件---不暴露
   2. 引入connect生成一个容器组件，并暴露，写法如下“
    
            connect(
              state=>({key:value}),//映射状态
              {key:xxxxxxxxxxxAction}//映射操作状态的方法
            )(UI组件)
    3. 再UI组件中通过this.props.xxxxx读取和操作状态

# 6.求和案例_react-redux数据共享版
1. 定义一个Person组件，和Count组件通过redux共享数据
2. 为Person组件编写：reducer、action。配置constant常量
3. 重点：Person的reducer和Count的reducer要使用combineReducers进行合并，合并后的总状态是一个对象！！！
4. 交给store的是总reducer，最后注意再组件中取出状态的时候，记得“取到位”

# 7.求和案例_react-redux开发者工具的使用
1. yarn add redux-devtools-extension
2. store中进行配置
``` js
 import { composeWithDevTools } from "redux-devtools-extension";
 export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

```
# 8.求和案例_react-redux最终版
1. 所有变量名字要规范，尽量触发对象的简写形式
2. reducers文件夹中，编写index。js专门用于汇总并暴露所有的reducer