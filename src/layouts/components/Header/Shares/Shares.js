import React from 'react';
import classNames from 'classnames/bind';
import styles from './Shares.module.scss';
import Image from '~/components/UI/Image';
import images from '~/assets/images';
import { GithubIcon } from '~/components/Icons';
import Button from '~/components/UI/Button';
import { constant } from '~/components/Constant';

const cx = classNames.bind(styles);

function Shares() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon-share')}>
                <Button href={constant.LINK_FACEBOOK} target="_blank">
                    <Image
                        src={images.logoFacebook}
                        alt="Facebook logo"
                        className={cx('facebook-logo')}
                    />
                </Button>
            </div>
            <div className={cx('icon-share')}>
                <Button href={constant.LINK_GITHUB}>
                    <GithubIcon className={cx('github-logo')} />
                </Button>
            </div>
        </div>
    );
}

export default Shares;
