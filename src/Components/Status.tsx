import { useAppSelector, useAppDispatch } from '../Store/hooks';
import { setIdle, setLoading, setFailed } from '../Store/StatusReducer/actions'
import { RootState } from '../Store/store';

const Status = () => {
    const dispatch = useAppDispatch();
    const selectStatus = (state: RootState) => state.status.status;
    const status = useAppSelector(selectStatus);

    return (
        <div style={{marginTop: "1rem"}}>
            <button onClick={() => dispatch(setIdle())} >Idle</button>
            <button onClick={() => dispatch(setLoading())} >Loading</button>
            <button onClick={() => dispatch(setFailed())} >Failed</button>
            <span style={{marginLeft: "1rem"}}>{status}</span>
        </div>
    )
}

export default Status;