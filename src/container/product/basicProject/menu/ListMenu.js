import classNames from 'classnames/bind';
import styles from './ListMenu.module.scss';
import { menus } from '~/API/product/basicProject/DataMenu';
import Button from '~/components/UI/Button';

const cx = classNames.bind(styles);

function ListMenu() {
    return (
        <div className={cx('wrapper-menu')}>
            <div className={cx('btn-container')}>
                <Button type="button" classNames={cx('filter-btn')}>
                    all
                </Button>
                <Button type="button" className={cx('filter-btn')}>
                    breakfast
                </Button>
                <Button type="button" className={cx('filter-btn')}>
                    lunch
                </Button>
                <Button type="button" className={cx('filter-btn')}>
                    shakes
                </Button>
            </div>
        </div>
    );
}

export default ListMenu;
