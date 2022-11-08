import React, { useState, useEffect, memo } from 'react';
import classNames from 'classnames/bind';
import * as Service from '~/services/DocReactService';
import styles from '../ContentTabGetStart.module.scss';
import Table from '~/components/UI/Table';

const cx = classNames.bind(styles);

function ListItem({ action }) {
    const [listTbody, setList] = useState([]);
    const [error, setError] = useState(null);
    const [listThead, setListThead] = useState([]);

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
    }, [action]);

    console.log('rerender');

    return (
        <div className={cx('div-table')}>
            <Table listThead={listThead} listTbody={listTbody} />
        </div>
    );
}

export default memo(ListItem);
