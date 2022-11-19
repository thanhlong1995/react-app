import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ListAccordion.module.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Accordion({ question }) {
    const { id, title, info } = question;

    const [isShow, setIsShow] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <section className={cx('section')}>
                <div className={cx('div-title')}>
                    <p className={cx('title')}>{title}</p>
                    <span className={cx('icon-plus')} onClick={() => setIsShow(!isShow)}>
                        {isShow ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div className={cx('div-info')}>{isShow && <p>{info}</p>}</div>
            </section>
        </div>
    );
}

export default Accordion;
