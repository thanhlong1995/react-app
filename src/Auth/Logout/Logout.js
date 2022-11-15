import Button from '~/components/UI/Button';
import classNames from 'classnames/bind';
import style from './Logout.module.scss';

const cx = classNames.bind(style);

function Logout() {
    return <Button className={cx('btn-logout')}>Logout</Button>;
}

export default Logout;
