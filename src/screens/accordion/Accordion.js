import classNames from 'classnames/bind';
import styles from './Accordion.module.scss';
import ListAccordino from '~/container/product/basicProject/accordion';

const cx = classNames.bind(styles);

function Accordino() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-accordion')}>
                <div className={cx('div-title')}>
                    <h2 className={cx('title')}>Questions And Answers About Login</h2>
                </div>
                <ListAccordino />
            </div>
        </div>
    );
}

export default Accordino;
