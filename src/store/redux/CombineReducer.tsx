export default function CombineReducer(reducers: any) {
	const reducerKeys = Object.keys(reducers)
	// 返回合并后的新的reducer函数
	return function combination(state = {}, action: any) {
		// 生成新的state
		const nextState = {}

		// 遍历执行所有的reducer，整合成为一个新的state
		for (let i = 0; i < reducerKeys.length; i++) {
			const key = reducerKeys[i]
			const reducer = reducers[key]
			// @ts-ignore
			// 之前的key的state
			const previousStateForKey = state[key]
			// 执行 分 reducer，获得新的state
			const nextStateForKey = reducer(previousStateForKey, action)
			// @ts-ignore
			nextState[key] = nextStateForKey
		}
		return nextState;
	}
}