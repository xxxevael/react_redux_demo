import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
)
// 在入口文件中检测store状态更改之后直接调用render
// store.subscribe(()=>{
//   root.render(
//     <React.StrictMode>
//       <App></App>
//     </React.StrictMode>
//   )
// })