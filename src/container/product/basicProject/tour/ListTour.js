import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ListTour.module.scss';
import Image from '~/components/UI/Image';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';
import Button from '~/components/UI/Button';

const cx = classNames.bind(styles);

function ListTour() {
    const [readMore, setReadMore] = useState(false);
    const [listTour, setListDataTour] = useState([]);
    const valueProvider = useAppProvider();

    useEffect(() => {
        valueProvider?.listDataTour && setListDataTour(valueProvider?.listDataTour);
    }, [valueProvider?.listDataTour]);

    const deleteTour = (id) => {
        const newTours = listTour.filter((tour) => tour.id !== id);
        setListDataTour(newTours);
    };
    return (
        <section className={cx('container')}>
            <div className={cx('title')}>
                <h2>our tours</h2>
                <div className={cx('underline')}></div>
            </div>
            {listTour.map((item) => (
                <article className={cx('single-tour')} key={item.id}>
                    <div className={cx('img-container')}>
                        <span className={cx('img-content')}>
                            <Image src={item.image} alt={item.name} className={cx('image')} />
                        </span>
                    </div>
                    <div className={cx('content', valueProvider?.themeColor ? '' : 'theme-color')}>
                        <div className={cx('info-title')}>
                            <span className={cx('name', valueProvider?.themeColor ? '' : 'theme-color')}>
                                <p>{item.name}</p>
                            </span>
                            <span className={cx('price')}>
                                <h4>${item.price}</h4>
                            </span>
                        </div>
                        <div className={cx('info')}>
                            <span>
                                {readMore ? item.info : `${item.info.substring(0, 200)}...`}
                                <Button onClick={() => setReadMore(!readMore)} className={cx('btn')}>
                                    {readMore ? 'Show Less' : 'Read More'}
                                </Button>
                            </span>
                        </div>
                        <div className={cx('div-action')}>
                            <Button
                                className={cx('btn-delete', valueProvider?.themeColor ? '' : 'theme-color')}
                                onClick={() => deleteTour(item.id)}>
                                Not interested
                            </Button>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}
export default ListTour;
