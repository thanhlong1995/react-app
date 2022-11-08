import React, { useState } from 'react';
import Box from '@mui/material/Box';
import classNames from 'classnames/bind';
import styles from './TabPanel.module.scss';
import Button from '~/components/UI/Button';
import Popper from '../TabContents/ContentTabGetStart/conponents/Popper';

const cx = classNames.bind(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'wrap-popper' : undefined;

    const handleAddGetStart = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClosePopper = () => {
        setAnchorEl(null);
    };
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            <div className={cx('content-title')}>
                <h2>{props.title}</h2>
                {props.title === 'Get Start Setting' ? (
                    <Button
                        className={cx('btn-add')}
                        onClick={handleAddGetStart}>
                        Add
                    </Button>
                ) : (
                    ''
                )}
            </div>
            {value === index && <Box>{children}</Box>}
            <Popper
                classes
                isDisable
                id={id}
                open={open}
                anchorEl={anchorEl}
                handleClosePopper={handleClosePopper}
            />
        </div>
    );
}
export default TabPanel;
