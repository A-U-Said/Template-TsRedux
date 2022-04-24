export const INCREMENT_COUNT: string = 'INCREMENT_COUNT';
export const DECREMENT_COUNT: string = 'DECREMENT_COUNT';
export const INCREMENT_COUNT_BY_AMOUNT: string = 'INCREMENT_COUNT_BY_AMOUNT';


export const increment = () : reducerAction<null> => {
    return {
        type: INCREMENT_COUNT
    }
}

export const decrement = () : reducerAction<null> => {
    return {
        type: DECREMENT_COUNT
    }
}

export const incrementByAmount = (amount: number) : reducerAction<number> => {
    return {
        type: INCREMENT_COUNT_BY_AMOUNT,
        payload: amount
    }
}