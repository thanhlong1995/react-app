/* eslint-disable no-const-assign */
import * as Service from '~/services/NavModuleService';

const getDataNavHeader = async (setListNavManu, setMsgError) => {
    try {
        const res = await Service.getAll();
        const listNavManu = [];
        for (const key in res) {
            listNavManu.push({
                id: key,
                name: res[key].name,
                href: res[key].href,
            });
            setListNavManu(listNavManu);
        }
    } catch (error) {
        setMsgError(error);
    }
};

export { getDataNavHeader };
