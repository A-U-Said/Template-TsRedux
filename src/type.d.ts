interface CounterState {
    value: number;
}

interface StatusState {
    status: 'idle' | 'loading' | 'failed';
}

type reducerAction<T> = {
    type: string;
    payload?: T;
}