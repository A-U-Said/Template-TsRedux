export const SET_IDLE: string = 'SET_IDLE';
export const SET_LOADING: string = 'SET_LOADING';
export const SET_FAILED: string = 'SET_FAILED';


export const setIdle = () : reducerAction<null> => {
    return {
        type: SET_IDLE
    }
}

export const setLoading = () : reducerAction<null> => {
    return {
        type: SET_LOADING
    }
}

export const setFailed = () : reducerAction<null> => {
    return {
        type: SET_FAILED
    }
}