import * as Service from '~/services/product/TourService';

const getDataTour = async (setListDataTour, setMsgError) => {
    try {
        const res = await Service.getAll();
        var listData = [];
        for (const key in res) {
            listData.push({
                id: key,
                name: res[key].name,
                info: res[key].info,
                image: res[key].image,
                price: res[key].price,
            });
        }
        setListDataTour(listData);
    } catch (error) {
        setMsgError(error);
    }
};
export { getDataTour };
