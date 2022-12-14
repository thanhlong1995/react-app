import React, { useState, createContext } from 'react';
import Box from '@mui/material/Box';
import classNames from 'classnames/bind';
import styles from './TabPanel.module.scss';
import Button from '~/components/UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'wrap-popper' : undefined;
    const [isloading, setIsLoading] = useState(false);
    const [hasChecked, setHasChecked] = useState(false);
    const [countItem, setCountItem] = useState(0);
    const [valueItemChecked, setValueItemChecked] = useState([]);
    const handleAddGetStart = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleDelete = (e) => {
        //await Service.deleteId(e);
        setIsLoading(!isloading);
        setCountItem(0);
        setValueItemChecked([]);
    };

    return (
        <ThemeTabPanel.Provider
            value={{
                setHasChecked,
                countItem,
                setCountItem,
                setValueItemChecked,
            }}>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}>
                <div className={cx('content-title')}>
                    <h2>{props.title}</h2>
                    {props.title === 'Get Start Setting' ? (
                        !hasChecked ? (
                            <Button className={cx('btn-add')} onClick={handleAddGetStart}>
                                Add
                            </Button>
                        ) : (
                            <div className={cx('header-icon')} onClick={handleDelete}>
                                <FontAwesomeIcon icon={faTrash} />
                                <span className={cx('count-item')}>{countItem > 0 ? countItem : ''}</span>
                            </div>
                        )
                    ) : (
                        ''
                    )}
                </div>
                {value === index && <Box>{children}</Box>}
            </div>
        </ThemeTabPanel.Provider>
    );
}
export const ThemeTabPanel = createContext();
export default TabPanel;
