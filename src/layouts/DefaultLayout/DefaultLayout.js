import { useContext } from 'react';
import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { ThemeContext } from '../../App';

const cx = classNames.bind(styles);

function DefaultLayout(props) {
    const { themeColor } = useContext(ThemeContext);
    return (
        <div className={cx('main')}>
            {props.Header === 'none' ? '' : <Header Page={props.Page} />}
            <div
                className={cx(
                    'container',
                    !themeColor ? 'has-theme-color' : '',
                )}>
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
