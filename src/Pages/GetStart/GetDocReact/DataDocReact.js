import React, { useState, useEffect, memo } from 'react';
import Button from '~/components/UI/Button';
import classNames from 'classnames/bind';
import styles from './DataDocReact.module.scss';
import * as Service from '~/services/DocReactService';

const cx = classNames.bind(styles);

function DataDocReact(props) {
    const [listMenu, setListMenu] = useState([]);
    const [msgError, seMsgError] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await Service.getAll();
            setListMenu(res);
        } catch (error) {
            seMsgError(error);
        }
    };
    return (
        <div>
            {props.listMenu ? (
                <ul className={cx('menu-ul')}>
                    {listMenu.length > 0
                        ? listMenu.map((item) => (
                              <li key={item.id}>
                                  <span className={cx('item-icon')}>
                                      {item.icon}
                                  </span>{' '}
                                  &nbsp;
                                  <Button className={cx('button-li')}>
                                      {item.title}
                                  </Button>
                              </li>
                          ))
                        : msgError}
                </ul>
            ) : (
                <ul className={cx('content-ul')}>
                    {listMenu.length > 0
                        ? listMenu.map((item) => (
                              <li key={item.id} className={cx('content-li')}>
                                  <h2
                                      className={cx(
                                          'typography',
                                          'title-content',
                                      )}>
                                      {item.title}
                                  </h2>
                                  <div className={cx('detail')}>
                                      {item.description}
                                  </div>
                                  <div className={cx('detail')}>
                                      {item.content}
                                  </div>
                              </li>
                          ))
                        : msgError}
                </ul>
            )}
        </div>
    );
}

export default memo(DataDocReact);
