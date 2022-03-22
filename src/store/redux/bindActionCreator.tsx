function bindActionCreator(actionCreator: any, dispatch: any) {
    return () => {
        //@ts-ignore
        return dispatch(actionCreator.apply(this, arguments))
    }
}

export default function bindActionCreators(actionCreator: any, dispatch: any) {
    //@ts-ignore
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreator, dispatch)
    }
    if (typeof actionCreator !== 'object' || actionCreator === null) {
        throw new Error()
    }

    const keys = Object.keys(actionCreator)
    const boundActionCreator = {}
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        //@ts-ignore
        const actionCreator = actionCreators[key]
        if (typeof actionCreator === 'function') {
            //@ts-ignore
            boundActionCreator[key] = bindActionCreator(actionCreator, dispatch)

        }
    }
    return boundActionCreator
}