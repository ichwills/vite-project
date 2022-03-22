let initState = {
    count: 0
}
// counterReducer, 一个子reducer
// !  counterReducer 接受的state 是 state.counter
export default function CounterReducer(state: any, action: any) {
    // 如果没有ReduxPage定义state就返回这个信息
    if (!state) {
        state = initState
    }
    switch (action.type) {
        case "INREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}