let initState = {
    name: 'FE-9',
    description: 'Learn'
}
// InfoReducer，一个子reducer
// ！InfoReducer接收的 state 是 state.info
export default function InfoReducer(state: any, action: any) {
    // 如果没有ReduxPage定义state就返回这个信息
    if (!state) {
        state = initState;
    }
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.name
            }
        case "SET_DESCRIPTION":
            return {
                ...state,
                description: action.description
            }
        default:
            return state;
    }
}