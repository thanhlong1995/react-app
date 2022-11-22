import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Jobs.module.scss';
import * as Service from '~/services/product/TabsService';
import { setTabsProduct, setErrorProduct } from '~/redux/actions/product/tabAction';
import Tab from './Tab';
import Job from './Job';

const cx = classNames.bind(styles);
function Jobs() {
    const tabProduct = useSelector((state) => state.productTabsReducer.tabProduct);
    const msgError = useSelector((state) => state.productTabsError.error);
    const [isloading, setIsloading] = useState(false);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    const getDataTabs = async () => {
        setIsloading(true);
        try {
            const res = await Service.getAll();
            dispatch(setTabsProduct(res));
            setIsloading(false);
        } catch (error) {
            dispatch(setErrorProduct(error));
            setIsloading(false);
        }
    };

    useEffect(() => {
        getDataTabs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isloading) {
        return (
            <div>
                <h2>isloading ...</h2>
            </div>
        );
    }

    if (msgError) {
        return <div>{msgError}</div>;
    }
    return (
        <div className={cx('jobs-center')}>
            <div className={cx('btn-container')}>
                {tabProduct.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setValue(index)}
                        className={cx('tab', index === value && 'active-btn')}>
                        {tab.company}
                    </button>
                ))}
            </div>
            {tabProduct.length > 0 && <Job tabProduct={tabProduct[value]} />}
        </div>
    );
}

export default Jobs;
