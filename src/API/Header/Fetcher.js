import { useEffect, memo } from 'react';
import * as Service from '~/services/NavModuleService';
import { useDispatch, useSelector } from 'react-redux';
import { setTabs, setError } from '~/redux/actions/tabHeaderAction';

function Fetcher({ children }) {
    const listNavManu = useSelector((state) => state.tabReducer);
    const msgError = useSelector((state) => state.tabError);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchTabs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchTabs = async () => {
        try {
            const res = await Service.getAll();
            dispatch(setTabs(res));
        } catch (error) {
            dispatch(setError(error));
        }
    };
    return children({ listNavManu, msgError });
}
export default memo(Fetcher);
