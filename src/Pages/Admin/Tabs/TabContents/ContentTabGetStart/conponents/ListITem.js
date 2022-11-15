import React, { useState, useEffect, useContext, memo } from 'react';
import classNames from 'classnames/bind';
import * as Service from '~/services/DocReactService';
import styles from '../ContentTabGetStart.module.scss';
import Table from '~/components/UI/Table';
import Button from '~/components/UI/Button';
import { ThemeTabPanel } from '~/Pages/Admin/Tabs/TabPanel/TabPanel';
import { NOT_DATA } from '~/components/UI/Constant/Constant';

const cx = classNames.bind(styles);

function ListItem() {
    const [listTbody, setListBody] = useState([]);
    const [listThead, setListThead] = useState([]);
    const { setHasChecked, countItem, setCountItem } =
        useContext(ThemeTabPanel);

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
                        content: result[key].content,
                        //image: result[key].image,
                        create_date: result[key].create_date,
                        creator: result[key].creator,
                    });
                }
                let header = Object.keys(listITemResult[0]);
                setListThead(header);
                setListBody(listITemResult);
            } catch (error) {}
        };
        fetchPutApi();
    }, []);

    useEffect(() => {
        countItem > 0 ? setHasChecked(true) : setHasChecked(false);
    }, [countItem]);

    // Handle checked and checkall
    const handleChange = (e) => {
        // Destructuring
        const { name, checked } = e.target;
        if (name === 'allSelect') {
            let tempItem = listTbody.map((item) => {
                return { ...item, isChecked: checked };
            });
            setListBody(tempItem);
            if (checked) {
                setCountItem(tempItem.length - 1);
            } else {
                setCountItem(0);
            }
        } else {
            let tempItem = listTbody.map((item) =>
                item.title === name ? { ...item, isChecked: checked } : item,
            );
            setListBody(tempItem);
            if (checked) {
                setCountItem((prev) => prev + 1);
            } else {
                setCountItem((prev) => prev - 1);
            }
        }
    };
    return (
        <div className={cx('div-table')}>
            {listTbody.length > 0 ? (
                <Table>
                    <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <input
                                    id="check-all"
                                    type="checkbox"
                                    name="allSelect"
                                    checked={
                                        !listTbody.some(
                                            (item) => item?.isChecked !== true,
                                        )
                                    }
                                    onChange={handleChange}
                                />
                            </th>
                            {listThead.map((item, index) => (
                                <th key={index} role="columnheader">
                                    {item.toUpperCase()}
                                </th>
                            ))}
                            <th role="columnheader">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTbody.map((item, index) => (
                            <tr key={item.id} htmlFor={item.id} role="row">
                                <td>
                                    <input
                                        id={parseInt(item.id) + 1}
                                        type="checkbox"
                                        name={item.title}
                                        checked={item?.isChecked || false}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td role="cell" data-title="ID">
                                    {index + 1}
                                </td>
                                <td role="cell" data-title="TITLE">
                                    <p>{item.title}</p>
                                </td>
                                <td role="cell" data-title="DESCRIPTION">
                                    <p>{item.description}</p>
                                </td>
                                <td role="cell" data-title="CONTENT">
                                    <p>{item.content}</p>
                                </td>
                                <td role="cell" data-title="CREATE_DATE">
                                    <p>{item.create_date}</p>
                                </td>
                                <td role="cell" data-title="CREATOR">
                                    <p>{item.creator}</p>
                                </td>
                                <td role="cell" data-title="ACTION">
                                    <Button className={cx('btn-edit')}>
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                NOT_DATA
            )}
        </div>
    );
}

export default memo(ListItem);
