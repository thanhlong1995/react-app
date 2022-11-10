import React from 'react';
import classNames from 'classnames/bind';
import styles from './Shares.module.scss';
import Image from '~/components/UI/Image';
import images from '~/assets/images';
import { GithubIcon } from '~/components/Icons';
import Button from '~/components/UI/Button';

const cx = classNames.bind(styles);

function Shares() {
    const linkFacebook = 'https://www.facebook.com/Long.NT.95';
    const linkGithub = 'https://github.com/thanhlong1995/react-hook-api-app';

    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon-share')}>
                <Button href={linkFacebook} target="_blank">
                    <Image
                        src={images.logoFacebook}
                        alt="Facebook logo"
                        className={cx('facebook-logo')}
                    />
                </Button>
            </div>
            <div className={cx('icon-share')}>
                <Button href={linkGithub}>
                    <GithubIcon className={cx('github-logo')} />
                </Button>
            </div>
        </div>
    );
}

export default Shares;
