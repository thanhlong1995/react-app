import { useState } from 'react';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.module.scss';
import { sliderData } from '~/API/product/basicProject/DataSliderProject';
import { AiFillLeftSquare, AiFillRightSquare } from 'react-icons/ai';
import Info from './Info';

const cx = classNames.bind(styles);

function Slide() {
    const [slideData, setSlideData] = useState(sliderData);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1;
                if (index > slideData.length - 1) {
                    index = 0;
                }
                return index;
            });
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > slideData.length - 1) {
                index = 0;
            }
            return index;
        });
    };
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;
            if (index < 0) {
                index = slideData.length - 1;
            }
            return index;
        });
    };
    return (
        <div className={cx('section-center')}>
            <div className={cx('btn-container')}>
                <AiFillLeftSquare className={cx('icon-aifill')} onClick={prevSlide} />
                <AiFillRightSquare className={cx('icon-aifill')} onClick={nextSlide} />
            </div>
            <Info slideData={slideData[index]} />
        </div>
    );
}

export default Slide;
