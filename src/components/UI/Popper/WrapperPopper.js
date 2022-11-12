import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import { Popper, ClickAwayListener } from '@mui/material';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function WrapperPopper({
    children,
    open,
    anchorEl,
    clickAwayHandler = () => {},
}) {
    return (
        <ClickAwayListener onClickAway={clickAwayHandler}>
            <div className={cx('wrapper')}>
                <Popper
                    open={open}
                    anchorEl={anchorEl}
                    transition
                    className={cx('wrapper-popper')}>
                    {children}
                </Popper>
            </div>
        </ClickAwayListener>
    );
}
WrapperPopper.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    clickAwayHandler: PropTypes.func,
};
export default WrapperPopper;
