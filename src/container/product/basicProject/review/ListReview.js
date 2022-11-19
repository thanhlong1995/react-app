import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTours, setError } from '~/redux/actions/product/tour/tourAction';
import classNames from 'classnames/bind';
import styles from './ListReview.module.scss';
import * as Service from '~/services/product/TourService';
import Tour from './Tour';

const cx = classNames.bind(styles);
function ListReview() {
    const tours = useSelector((state) => state.tourReducer.tours);
    const msgError = useSelector((state) => state.tourError.error);
    const [isloading, setIsloading] = useState(false);
    const dispatch = useDispatch();

    if (isloading) {
        return (
            <div>
                <h2>Loading ...</h2>
            </div>
        );
    }
    return (
        <section className={cx('container')}>
            <div className={cx('title')}>
                <h2>Our Tours</h2>
                <div className={cx('underline')}></div>
            </div>
            {msgError && <div>{msgError}</div>}
            {tours.map((tour, index) => (
                <Tour tour={tour} deleteTour={deleteTour} key={index} />
            ))}
        </section>
    );
}

export default ListReview;
