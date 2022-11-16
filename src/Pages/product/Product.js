import React from 'react';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Banner from '~/container/product/Banner';
import BasicProject from './basicProject';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <BasicProject />
        </div>
    );
}

export default Product;
