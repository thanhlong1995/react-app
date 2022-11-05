import { memo } from 'react';
import classNames from 'classnames/bind';
import style from './Item.module.scss';
import Item from './Item';
import * as ItemService from '~/services/ItemService';

const cx = classNames.bind(style);

function ListItem(props) {
    return (
        <div className={cx('wrapper')}>
            {props.listItem.length > 0
                ? props.listItem.map((item) => (
                      <Item key={item.id} title={item.title} description={item.description} price={item.price} />
                  ))
                : props.error}
        </div>
    );
}

export default memo(ListItem);
