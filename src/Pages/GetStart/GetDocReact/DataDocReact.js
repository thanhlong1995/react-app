import React, { useState, memo } from 'react';
import Button from '~/components/UI/Button';
import classNames from 'classnames/bind';
import styles from './DataDocReact.module.scss';
import Fetcher from '~/API/GetStartDoc/Fetcher';

const cx = classNames.bind(styles);

function DataDocReact(props) {
    return (
        <Fetcher>
            {({ isLoading, error, listResult }) => {
                if (isLoading) {
                    return <div>Loading..</div>;
                }
                if (error) {
                    return <div>{error}</div>;
                }
                return (
                    <div>
                        {props.isMenu ? (
                            <ul className={cx('menu-ul')}>
                                {listResult.length > 0
                                    ? listResult.map((item) => (
                                          <li key={item.id}>
                                              <span className={cx('item-icon')}>
                                                  {item.icon}
                                              </span>{' '}
                                              &nbsp;
                                              <Button
                                                  className={cx('button-li')}>
                                                  {item.title}
                                              </Button>
                                          </li>
                                      ))
                                    : error}
                            </ul>
                        ) : (
                            <ul className={cx('content-ul')}>
                                {listResult.length > 0
                                    ? listResult.map((item) => (
                                          <li
                                              key={item.id}
                                              className={cx('content-li')}>
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
                                    : error}
                            </ul>
                        )}
                    </div>
                );
            }}
        </Fetcher>
    );
}

export default memo(DataDocReact);
