import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './LoremIPSum.module.scss';
import Button from '~/components/UI/Button';
import { loremText } from '~/API/product/basicProject/DataLoremIPSum';

const cx = classNames.bind(styles);

function LoremIPSum() {
    const [dataLorem, setDataLorem] = useState(loremText);
    const colorTheme = useSelector((state) => state.colorThemeReducer.color);
    const inputRef = useRef();
    console.log(dataLorem[0]);
    const handleOnClick = () => {};
    return (
        <aside className={cx('section-center')}>
            <div className={cx('section-input')}>
                <label htmlFor="ipsum">Paragraphs:&nbsp;</label>
                <input
                    id="ipsum"
                    className={cx('ipsum', colorTheme === 'light' ? 'has-theme-color' : '')}
                    ref={inputRef}
                    type="number"
                />
                <Button className={cx('btn-generate')} onClick={handleOnClick}>
                    generate
                </Button>
            </div>
            <div className={cx('section-center')}></div>
        </aside>
    );
}

export default LoremIPSum;
