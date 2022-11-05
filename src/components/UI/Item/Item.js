import classNames from 'classnames/bind';
import style from './Item.module.scss';

const cx = classNames.bind(style);
function Item(props) {
    return (
        <div className={cx('content-item')}>
            <div className={cx('div-item')}>
                <div className={cx('item-left')}>
                    <h2 className={cx('detail')}>{props.title}</h2>
                    <h4 className={cx('detail')}>{props.description}</h4>
                </div>
                <div className={cx('item-right')}>
                    <h2 className={cx('detail')}>{props.price}</h2>
                </div>
            </div>
        </div>
    );
}

export default Item;
