function logger(reducer) {
    return (preState, action) => {
        console.group(action.type);
        console.log('pre State :' + preState);
        console.log('action :' + action);

        const nextState = reducer(preState, action);
        console.log('next State :' + nextState);
        console.groupEnd();
        return nextState;
    };
}

export default logger;
