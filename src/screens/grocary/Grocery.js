import classNames from 'classnames/bind';
import styles from './Grocery.module.scss';
import GroceryBud from '~/container/product/basicProject/grocery';

const cx = classNames.bind(styles);

function Grocery() {
    return (
        <main>
            <section className={cx('container-grocery')}>
                <div className={cx('div-title')}>
                    <h2 className={cx('title')}>Grocery Bud</h2>
                </div>
                <GroceryBud />
            </section>
        </main>
    );
}

export default Grocery;
