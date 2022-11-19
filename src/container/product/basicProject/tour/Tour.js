import { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './ListTour.module.scss';
import Button from '~/components/UI/Button';
import Image from '~/components/UI/Image';

const cx = classNames.bind(styles);
function Tour({ tour, deleteTour }) {
    const [readMore, setReadMore] = useState(false);
    const themeColor = useSelector((state) => state.colorThemeReducer.color);
    const { id, name, image, price, info } = tour;
    return (
        <article className={cx('single-tour')} key={id}>
            <div className={cx('img-container')}>
                <span className={cx('img-content')}>
                    <Image src={image} alt={name} className={cx('image')} />
                </span>
            </div>
            <div className={cx('content', themeColor ? '' : 'theme-color')}>
                <div className={cx('info-title')}>
                    <span className={cx('name', themeColor ? '' : 'theme-color')}>
                        <p>{name}</p>
                    </span>
                    <span className={cx('price')}>
                        <h4>${price}</h4>
                    </span>
                </div>
                <div className={cx('info')}>
                    <span>
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <Button onClick={() => setReadMore(!readMore)} className={cx('btn')}>
                            {readMore ? 'Show Less' : 'Read More'}
                        </Button>
                    </span>
                </div>
                <div className={cx('div-action')}>
                    <Button
                        className={cx('btn-delete', themeColor ? '' : 'theme-color')}
                        onClick={() => deleteTour(id)}>
                        Not interested
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default Tour;
