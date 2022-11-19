import { useState } from 'react';
import { reviews } from '~/API/product/basicProject/DataReview';
import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Review() {
    const [index, setIndex] = useState(0);

    const { name, job, image, text } = reviews[index];

    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0) {
            return reviews.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const randomPerson = () => {
        setIndex((index) => {
            let newIndex = Math.floor(Math.random() * reviews.length);
            console.log(newIndex);
            return checkNumber(newIndex);
        });
    };

    return (
        <article className={cx('review')}>
            <div className={cx('img-container')}>
                <img src={image} alt={name} className={cx('person-img')} />
                <span className={cx('quote-icon')}>
                    <FaQuoteRight className={cx('qoute-right')} />
                </span>
            </div>
            <h4 className={cx('author')}>{name}</h4>
            <p className={cx('job')}>{job}</p>
            <p className={cx('info')}>{text}</p>
            <div className={cx('button-container')}>
                <button className={cx('prev-btn')} onClick={prevPerson}>
                    <FaAngleLeft className={cx('angle-icon')} />
                </button>
                <button className={cx('next-btn')} onClick={nextPerson}>
                    <FaAngleRight className={cx('angle-icon')} />
                </button>
            </div>
            <button className={cx('random-btn')} onClick={randomPerson}>
                surprise me
            </button>
        </article>
    );
}

export default Review;
