import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import ListMenu from '~/container/product/basicProject/menu';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <main className={cx('main-menu')}>
            <section className={cx('container-menu')}>
                <div className={cx('title')}>
                    <h2>Our Menu</h2>
                    <div className={cx('underline')}></div>
                </div>
                <ListMenu />
            </section>
        </main>
    );
}

export default Menu;
