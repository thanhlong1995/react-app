import * as Service from '~/services/product/ProjectInfo';

const getDataTour = async (setListDataTour, setMsgError) => {
    try {
        const res = await Service.getAll();
        const listDataProjectInfo = [];
        for (const key in res) {
            listDataProjectInfo.push({
                id: key,
                name: res[key].name,
                info: res[key].info,
                image: res[key].image,
                price: res[key].price,
            });
        }
        setListDataTour(listDataProjectInfo);
    } catch (error) {
        setMsgError(error);
    }
};
export { getDataTour };
