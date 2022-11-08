import classNames from 'classnames/bind';
import styles from '../ContentTabGetStart.module.scss';
import Button from '~/components/UI/Button';
import WrapperPopper from '~/components/UI/Popper';

const cx = classNames.bind(styles);

function Popper(props) {
    return (
        <WrapperPopper
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            className={cx('wrap-popper')}>
            <div className={cx('main-popper')}>
                <Button
                    className={cx('edit-profile-cancel')}
                    onClick={props.handleClosePopper}>
                    Cancel
                </Button>
                <Button
                    className={cx('btn-submit', props.classes)}
                    disabled={props.isDisable}
                    onClick={props.handleClosePopper}>
                    Save
                </Button>
            </div>
        </WrapperPopper>
    );
}

export default Popper;
