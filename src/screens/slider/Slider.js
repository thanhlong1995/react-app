import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Slide from '~/container/product/basicProject/slider';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <main>
            <section className={cx('container-slider')}>
                <div className={cx('div-title')}>
                    <h2 className={cx('title')}>
                        <span>/</span>Reviews
                    </h2>
                </div>
                <Slide />
            </section>
        </main>
    );
}

export default Slider;
