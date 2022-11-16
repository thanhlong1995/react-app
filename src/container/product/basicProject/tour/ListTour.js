import classNames from 'classnames/bind';
import styles from './ListTour.module.scss';
import Image from '~/components/UI/Image';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';

const cx = classNames.bind(styles);

function ListTour() {
    const valueProvider = useAppProvider();
    return (
        <div>
            {valueProvider?.listDataTour.map((item) => (
                <article className={cx('item')} key={item.id}>
                    <Image src={item.image} alt={item.name} />
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </div>
                        <div className={cx('info')}>
                            <span>{item.info}</span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
export default ListTour;
