import classNames from 'classnames/bind';
import styles from './ListMenu.module.scss';
import Image from '~/components/UI/Image';

const cx = classNames.bind(styles);

function Menu({ menu }) {
    const { id, title, img, price, desc } = menu;
    return (
        <aside className={cx('menu-content')} key={id}>
            <div className={cx('image-content')}>
                <Image src={img} alt={title} className={cx('image')} />
            </div>
            <div className={cx('menu-info')}>
                <div className={cx('content-top')}>
                    <h3 className={cx('title')}>{title}</h3>
                    <span className={cx('price')}>${price}</span>
                </div>
                <div className={cx('content-under')}>
                    <p>{desc}</p>
                </div>
            </div>
        </aside>
    );
}

export default Menu;
