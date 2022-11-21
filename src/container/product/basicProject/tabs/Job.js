import classNames from 'classnames/bind';
import styles from './Jobs.module.scss';
const cx = classNames.bind(styles);
function Job({ tabs }) {
    return <div className={cx('tabs')}></div>;
}

export default Job;
