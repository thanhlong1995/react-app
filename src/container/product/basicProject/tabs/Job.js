import classNames from 'classnames/bind';
import styles from './Jobs.module.scss';
import { AiOutlineDoubleRight } from 'react-icons/ai';
const cx = classNames.bind(styles);
function Job({ tabProduct }) {
    const { company, dates, duties, title } = tabProduct;
    return (
        <div className={cx('tab-content')}>
            <h2 className={cx('title')}>{title}</h2>
            <h4 className={cx('company')}>{company}</h4>
            <span className={cx('date')}>{dates}</span>
            <div className={cx('duties-content')}>
                {duties.map((duty, index) => {
                    return (
                        <div key={index} className={cx('job-desc')}>
                            <AiOutlineDoubleRight className={cx('job-icon')} />
                            <p>{duty}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Job;
