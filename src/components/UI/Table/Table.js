import React, { memo } from 'react';
import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

function Table(props) {
    return (
        <table id="table">
            <thead>
                <tr>
                    <th>
                        <input id="check-all" type="checkbox" />
                    </th>
                    {props.listThead.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.listTbody.map((item, index) => (
                    <tr key={item.id} htmlFor={item.id}>
                        <td>
                            <input id={item.id} type="checkbox" />
                        </td>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.data}</td>
                        <td>
                            <Button className={cx('btn-edit')}>Edit</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default memo(Table);
