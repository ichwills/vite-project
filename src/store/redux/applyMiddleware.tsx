import compose from "./compose";

const applyMiddleware = function (...middlewares: any[]) {
    return function (oldCreateStore: any) {
        // 生成新的createStore
        return function newCreateStore(reducer: any, initState: any) {
            // 给每个middleware 传下store，相当于声明loggerMiddleware

            const store = oldCreateStore(reducer, initState);
            // const chain = middlewares.map(middleware => middleware(store));
            const simpleStore = { getState: store.getState };
            const chain = middlewares.map(middleware => middleware(simpleStore))

            // let dispatch = store.dispatch;

            // 实现exception(time(logger(dispatch)))
            // chain.reverse().map(middleware => {
            //     dispatch = middleware(dispatch);
            // });

            // 重写dispatch
            // store.dispatch = dispatch;
            // return store;

            // new dispatch
            const dispatch = compose(...chain)(store.dispatch)

            return {
                ...store,
                dispatch
            }
        }
    }
}
export default applyMiddleware;