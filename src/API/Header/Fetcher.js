import { useState, useEffect, useCallback } from 'react';
import * as Service from '~/services/NavModuleService';

function Fetcher({ children }) {
    const [listMenu, setListMenu] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        getData();
    }, []);

    const getData = useCallback(async () => {
        try {
            const res = await Service.getAll();
            const listITemResult = [];
            for (const key in res) {
                listITemResult.push({
                    id: key,
                    name: res[key].name,
                    href: res[key].href,
                });
            }
            setListMenu(listITemResult);
        } catch (error) {
            setError(error);
        }
    }, []);
    return children({ listMenu, error });
}
export default Fetcher;
