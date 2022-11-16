import * as Service from '~/services/product/ProjectInfo';

const getDataProjectInfo = async (setListDataProjectInfo, setMsgError) => {
    try {
        const res = await Service.getAll();
        const listDataProjectInfo = [];
        for (const key in res) {
            listDataProjectInfo.push({
                id: key,
                name: res[key].name,
                href: res[key].href,
                type: res[key].type,
                image: res[key].image,
            });
        }
        setListDataProjectInfo(listDataProjectInfo);
    } catch (error) {
        setMsgError(error);
    }
};
export { getDataProjectInfo };
