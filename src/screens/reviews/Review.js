import ListReview from '~/container/product/basicProject/review/ListReview';
import classNames from 'classnames/bind';
import styles from './Review.module.scss';

const cx = classNames.bind(styles);

function Review() {
    return (
        <main>
            <ListReview />
        </main>
    );
}

export default Review;
