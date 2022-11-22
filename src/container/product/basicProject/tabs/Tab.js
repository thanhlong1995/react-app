import classNames from 'classnames/bind';
import styles from './Jobs.module.scss';
const cx = classNames.bind(styles);
function Tab({ tabProduct, value, setValue }) {
    return (
        <div className={cx('tabs')}>
            {tabProduct.map((tab, index) => (
                <span
                    className={cx('tab', index === value && 'active-btn')}
                    key={index}
                    onClick={() => setValue(index)}>
                    {tab.company}
                </span>
            ))}
        </div>
    );
}

export default Tab;
