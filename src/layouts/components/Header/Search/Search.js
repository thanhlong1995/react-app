
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Search(props) {

    return <div className={cx('wrapper')}>
            <div className={cx('content-search')} onClick={props.handleOnClick}>
                <input 
                    className={cx('search-input', props.hiddenIcon ? "resize-input" : "")} 
                    id="search" placeholder={props.hiddenIcon ? "search..." : ""} 
                    ref={props.inputSearchRef}
                    value={props.valueInput}
                    onChange={e => props.setValueInput(e.target.value)}
                />
                <SearchIcon className={cx('search-icon', props.hiddenIcon ? "hidden-icon" : "")}></SearchIcon> 
            </div>
    </div>
}
Search.propTypes = {
    handleOnClick: PropTypes.func.isRequired,
    setValueInput: PropTypes.func.isRequired,
    hiddenIcon: PropTypes.string.isRequired,
    hiddeninputSearinputSearchRefchRefIcon: PropTypes.string.isRequired,
    valueInput: PropTypes.string.isRequired,
}
export default Search;