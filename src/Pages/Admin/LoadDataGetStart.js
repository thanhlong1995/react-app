import React, { useState, useEffect, memo } from 'react';
import * as Service from '~/services/DocReactService';
function LoadDataGetStart() {
    const [listTbody, setList] = useState([]);
    const [error, setError] = useState(null);
    const [listThead, setListThead] = useState([]);
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const fetchPutApi = async () => {
            try {
                const result = await Service.getAll();
                const listITemResult = [];
                for (const key in result) {
                    listITemResult.push({
                        id: key,
                        title: result[key].title,
                        description: result[key].description,
                        data: result[key].data,
                    });
                }
                let header = Object.keys(listITemResult[0]);
                setListThead(header);
                setList(listITemResult);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchPutApi();
    }, []);

    setListData({
        listThead: listThead,
        listTbody: listTbody,
    });
    return listData;
}

export default LoadDataGetStart;
