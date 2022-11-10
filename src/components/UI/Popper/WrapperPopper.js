import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import { Popper } from '@mui/material';
import { ShowPopper } from '~/layouts/components/Header/Header';

const cx = classNames.bind(styles);

function WrapperPopper({ children, id, open, anchorEl, className }) {
    return (
        <div className={cx('wrapper', className)}>
            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                transition
                className={cx('wrapper-popper')}>
                {children}
            </Popper>
        </div>
    );
}

export default WrapperPopper;
