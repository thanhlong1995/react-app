import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import Image from '~/components/UI/Image';

const cx = classNames.bind(styles);

function Info({ slideData }) {
    const { title, name, image, quote } = slideData;
    return (
        <div className={cx('information')}>
            <Image src={image} alt={name} className={cx('image')} />

            <div className={cx('name-info')}>
                <p className={cx('name')}>{name}</p>
            </div>
            <div className={cx('name-info')}>
                <p className={cx('title')}>{title}</p>
            </div>
            <div className={cx('name-info')}>
                <p className={cx('quote')}>{quote}</p>
            </div>
        </div>
    );
}

export default Info;
