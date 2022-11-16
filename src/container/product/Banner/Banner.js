import React from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import images from '~/assets/images/';
import Image from '~/components/UI/Image';
import { BannerIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-description')}>
                <h1 className={cx('title')}>React Projects</h1>
                <span className={cx('description')}>
                    <p>
                        Projects are the most practical way to learn any
                        language, and{' '}
                        <span className={cx('react-inportant')}>React </span> is
                        no exception. Solidify your knowledge of React by
                        creating these cool projects.
                    </p>
                </span>
            </div>
            <div className={cx('banner-image')}>
                <BannerIcon className={cx('banner-image')} />
            </div>
        </div>
    );
}

export default Banner;
