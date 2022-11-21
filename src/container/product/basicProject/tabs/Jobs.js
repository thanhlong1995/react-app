import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Jobs.module.scss';
import Button from '~/components/UI/Button';
import * as Service from '~/services/product/TabsService';
import { setTabs, setError } from '~/redux/actions/product/tabAction';
import Tab from './Tab';
import Job from './Job';

const cx = classNames.bind(styles);
function Jobs() {
    const tabs = useSelector((state) => state.tabsReducer.tabs);
    const msgError = useSelector((state) => state.tabsError.error);
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [isloading, setIsloading] = useState(false);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        getTabs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const getTabs = async () => {
        setIsloading(true);
        try {
            const res = await Service.getAll();
            dispatch(setTabs(res));
            setIsloading(false);
        } catch (error) {
            dispatch(setError(error));
            setIsloading(false);
        }
    };

    const handleClick = (company) => {
        // eslint-disable-next-line array-callback-return
        tabs.map((tab) => {
            if (tab.company.includes(company)) {
                setIsActiveButton(true);
            }
        });
    };

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

    const { company, dates, duties, title } = tabs[value];
    console.log(company);
    return (
        <div className={cx('jobs-center')}>
            <Tab tabs={tabs} value={value} setValue={setValue} isActiveButton={isActiveButton} />
            <Job tabs={tabs} />
        </div>
    );
}

export default Jobs;
