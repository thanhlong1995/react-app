import React, { useState, useEffect, memo } from 'react';
import * as Service from '~/services/product';

function Fetcher({ children }) {
    const [listResult, setListResult] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await Service.getAll();
            setListResult(res);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    return children({ listResult, error, isLoading });
}
export default Fetcher;
