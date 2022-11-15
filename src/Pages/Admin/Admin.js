import { useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './Tabs/TabPanel';
import ContentTabHeader from './Tabs/TabContents/ContentTabHeader';
import ContentTabHome from './Tabs/TabContents/ContentTabHome';
import ContentTabGetStart from './Tabs/TabContents/ContentTabGetStart';
import ContentTabAPI from './Tabs/TabContents/ContentTabAPI';
import ContentTabAdvance from './Tabs/TabContents/ContentTabAdvance';
import ContentTabResource from './Tabs/TabContents/ContentTabResource';

const cx = classNames.bind(styles);

const menu = [
    { name: 'Header Setting', conponent: <ContentTabHeader /> },
    { name: 'Home Setting', conponent: <ContentTabHome /> },
    { name: 'Get Start Setting', conponent: <ContentTabGetStart /> },
    { name: 'API Setting', conponent: <ContentTabAPI /> },
    { name: 'Advance Setting', conponent: <ContentTabAdvance /> },
    { name: 'Resource Setting', conponent: <ContentTabResource /> },
];

function Admin() {
    const [value, setValue] = useState(0);
    const [marginLeft, setMarginLeft] = useState(320);
    const [isActive, setIsActive] = useState(false);

    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
        setMarginLeft(event.target.clientWidth + 70);
        setIsActive(!isActive);
    }, []);

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <Box sx={{ flexGrow: 2, display: 'flex', width: '100%' }}>
                    <div className={cx('div-module-menu')}>
                        <div className={cx('module-menu')}>
                            <div className={cx('div-menu')}>
                                <h2 className={cx('menu-title')}>Dashboard</h2>
                                <div className={cx('menu-content')}>
                                    <Tabs
                                        variant="scrollable"
                                        orientation="vertical"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="basic tabs example">
                                        {menu.map((item, index) => (
                                            <Tab
                                                className={cx(
                                                    'list-tab',
                                                    isActive ? 'is-active' : '',
                                                )}
                                                ref={(node) =>
                                                    node?.style.setProperty(
                                                        'align-items',
                                                        'flex-start',
                                                        'important',
                                                    )
                                                }
                                                label={item.name}
                                                key={index}
                                                {...a11yProps(index)}
                                            />
                                        ))}
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx('main-content')}
                        style={{ marginLeft: marginLeft }}>
                        <div className={cx('content')}>
                            {menu.map((item, index) => (
                                <TabPanel
                                    title={item.name}
                                    key={index}
                                    value={value}
                                    index={index}>
                                    {item.conponent}
                                </TabPanel>
                            ))}
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    );
}
export default Admin;
