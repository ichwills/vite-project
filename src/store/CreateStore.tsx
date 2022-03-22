import { createStore } from "redux";

export default function CreateStore(reducer: any, initState: any, rewriteCreateStoreFunc: any) {
    if (typeof initState === 'function' && typeof rewriteCreateStoreFunc === 'undefined') {
        rewriteCreateStoreFunc = initState;
        initState = undefined
    }

    if (rewriteCreateStoreFunc) {
        const newCreateStore = rewriteCreateStoreFunc(createStore);
        return newCreateStore(reducer, initState);
    }

    let state = initState;
    let listeners: any[] = [];

    function subscribe(listener: any) {
        listeners.push(listener)
        return function unsubscribe() {
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }
    // function changeState(newState: any) {
    //     state = newState;
    //     for (let i = 0; i < listeners.length; i++) {
    //         const listener = listeners[i];
    //         listener();
    //     }
    // }
    function dispatch(action: any) {
        state = reducer(state, action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }

    function getState() {
        return state;
    }

    function replaceReducer(nextReducer: any) {
        reducer = nextReducer
        dispatch({ type: Symbol() })
    }
    // 用一个不匹配任何计划的type，来获取初始值
    dispatch({
        type: Symbol()
    })
    return {
        subscribe,
        dispatch,
        getState,
        replaceReducer
    }
}