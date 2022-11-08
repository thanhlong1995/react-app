import { useContext } from 'react';
import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { ThemeContext } from '../../App';

const cx = classNames.bind(styles);

function DefaultLayout({ Page, children }) {
    const { themeColor } = useContext(ThemeContext);
    return (
        <div className={cx('main')}>
            <Header Page={Page} />
            <div
                className={cx(
                    'container',
                    !themeColor ? 'has-theme-color' : '',
                )}>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
