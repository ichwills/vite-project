import { Component } from "react";
import counterReducer from "../store/reducers/counter";
import InfoReducer from "../store/reducers/info";
import { applyMiddleware, combineReducers, createStore } from "redux";
import loggerMiddleware from "../middlewares/loggerMiddleware";
import exceptionMiddleware from "../middlewares/exceptionMiddleware";
import timeMiddleware from "../middlewares/timeMiddleware";

// 把多个reducer函数合并成一个reducer函数，大概这样使用
const reducer = combineReducers({
	counter: counterReducer,
	info: InfoReducer
})

// Middleware
// const logger = loggerMiddleware(store);
// const exception = exceptionMiddleware(store);
// const time = timeMiddleware(store);

// 接收旧的createStore，返回新的createStore
const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware);

// 返回dispatch 被重写过的store
const store = createStore(reducer, {}, rewriteCreateStoreFunc);

// const next = store.dispatch;
// 不创建信息就会被reducer自带的initState替代
// let initState = {
// 	counter: {
// 		count: 1
// 	},
// 	info: {
// 		name: 'FE',
// 		description: 'ReduxPage'
// 	}
// }
// let store = CreateStore(reducer, initState);

// 此时因为没有声明initState 所以state为undefined
// action.type 为不匹配任何计划中的type的值，所以会返回reducer 中设置的默认值


console.dir(store.getState());

store.subscribe(() => {
	let state = store.getState();
	console.log(state.counter.count, state.info.name, state.info.description);
})

// 自增
store.dispatch({
	type: "INREMENT"
});

// 修改 name
store.dispatch({
	type: "SET_NAME",
	name: "new name"
})

export default class ReduxPage extends Component {
	render() {
		return (
			<div className="App">
				<h1>ReduxPage</h1>
				<h1>Redux done</h1>
			</div>
		)
	}
}