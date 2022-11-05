import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Shares.module.scss';
import Image from '~/components/UI/Image';
import images from '~/assets/images';
import { GithubIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import Constant from '~/components/Constant';

const cx = classNames.bind(styles);

function Shares() {
    console.log(Constant.linkFacebook);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon-share')}>
                <Link>
                    <Image src={images.logoFacebook} alt="Facebook logo" className={cx('facebook-logo')} />
                </Link>
            </div>
            <div className={cx('icon-share')}>
                <Link>
                    <GithubIcon className={cx('github-logo')} />
                </Link>
            </div>
        </div>
    );
}

export default Shares;
