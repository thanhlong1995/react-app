import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ListMenu.module.scss';
import { menus } from '~/API/product/basicProject/DataMenu';
import Button from '~/components/UI/Button';
import Menu from './Menu';

const cx = classNames.bind(styles);

const allCategories = ['all', ...new Set(menus.map((item) => item.category))];

function ListMenu() {
    const [listCurrentMenu, setListCurrentMenu] = useState(menus);
    const filterItems = (category) => {
        const newMenu = menus.filter((menu) => menu.category === category);
        category !== 'all' ? setListCurrentMenu(newMenu) : setListCurrentMenu(menus);
    };

    return (
        <>
            <div className={cx('btn-container')}>
                {allCategories.map((category, index) => (
                    <Button type="button" className={cx('filter-btn')} onClick={() => filterItems(category)}>
                        {category}
                    </Button>
                ))}
            </div>
            <div className={cx('section-center')}>
                {listCurrentMenu.map((menu, index) => (
                    <Menu menu={menu} key={index} />
                ))}
            </div>
        </>
    );
}

export default ListMenu;
