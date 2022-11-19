import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTours, setError } from '~/redux/actions/product/tourAction';
import classNames from 'classnames/bind';
import styles from './ListTour.module.scss';
import * as Service from '~/services/product/TourService';
import Tour from './Tour';

const cx = classNames.bind(styles);

function ListTour() {
    const tours = useSelector((state) => state.reviewReducer.reviews);
    const msgError = useSelector((state) => state.tourError.error);
    const [isloading, setIsloading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getDataTour();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getDataTour = async () => {
        setIsloading(true);
        try {
            const res = await Service.getAll();
            dispatch(setTours(res));
            setIsloading(false);
        } catch (error) {
            dispatch(setError(error));
            setIsloading(false);
        }
    };

    const deleteTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        dispatch(setTours(newTours));
    };
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
export default ListTour;
