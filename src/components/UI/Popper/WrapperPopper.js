import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import { Popper } from '@mui/material';

const cx = classNames.bind(styles);

function WrapperPopper({ children }, props) {
    return (
        <div className={cx('wrapper', props.className)}>
            <Popper
                id={props.id}
                open={props.open}
                anchorEl={props.anchorEl}
                transition>
                {children}
            </Popper>
        </div>
    );
}

export default WrapperPopper;
