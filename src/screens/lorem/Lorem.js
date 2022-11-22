import classNames from 'classnames/bind';
import LoremIPSum from '~/container/product/basicProject/lorem/LoremIPSum';
import styles from './Lorem.module.scss';

const cx = classNames.bind(styles);
function Lorem() {
    return (
        <main>
            <section className={cx('container-lorem')}>
                <div className={cx('div-title')}>
                    <h2 className={cx('title')}>TIRED OF BORING LOREM IPSUM?</h2>
                </div>
                <LoremIPSum />
            </section>
        </main>
    );
}

export default Lorem;
