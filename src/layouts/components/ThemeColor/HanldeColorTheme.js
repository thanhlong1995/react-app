import { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './HandleColorTheme.module.scss';
import { ThemeContext } from '../../../App';

const cx = classNames.bind(styles);
function HandleColorTheme() {
    const { setColor, themeColor, setThemeColor } = useContext(ThemeContext);

    const [checked, setChecked] = useState(false);
    const handleChangeColor = () => {
        setChecked(!checked);
        setThemeColor(checked);
        if (themeColor) {
            setColor('light');
        } else {
            setColor('dark');
        }
    };

    return (
        <label htmlFor="toggle" className={cx('toggle-module-toggle')}>
            <input id="toggle" type="checkbox" onChange={handleChangeColor} checked={checked} />
            <span className={cx('toggle-module-slider', 'toggle-module-round')} />
        </label>
    );
}

export default HandleColorTheme;
