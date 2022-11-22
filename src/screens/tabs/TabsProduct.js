import classNames from 'classnames/bind';
import styles from './Tabs.module.scss';
import Jobs from '~/container/product/basicProject/tabs';

const cx = classNames.bind(styles);

function TabsProduct() {
    return (
        <main>
            <section className={cx('container-tab')}>
                <div className={cx('div-title')}>
                    <h2 className={cx('title')}>Experience</h2>
                    <div className={cx('underline')}></div>
                </div>
                <Jobs />
            </section>
        </main>
    );
}

export default TabsProduct;
