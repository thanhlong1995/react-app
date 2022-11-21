import classNames from 'classnames/bind';
import styles from './Reviews.module.scss';
import Review from '~/container/product/basicProject/review';

const cx = classNames.bind(styles);

function Reviews() {
    return (
        <main className={cx('main-review')}>
            <section className={cx('container')}>
                <div className={cx('title')}>
                    <h2>Our Review</h2>
                    <div className={cx('underline')}></div>
                </div>
                <Review />
            </section>
        </main>
    );
}

export default Reviews;
