import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../Store/hooks';
import { increment, decrement, incrementByAmount } from '../Store/CounterReducer/actions';
import { RootState } from '../Store/store';

const Counter = () => {
  const selectCount = (state: RootState) => state.counter.value;
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('5');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())} >-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())} >+</button>
      </div>
      <div>
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))} >Add Amount</button>
      </div>
    </>
  )
}

export default Counter;