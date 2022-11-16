import { useAppProvider } from '~/Context/AppProvider/AppProvider';

function Tours({ children }) {
    const valueAppProvider = useAppProvider();
    const listDataTour = valueAppProvider?.listDataTour;
    const msgError = valueAppProvider?.msgError;
    return children({ listDataTour, msgError });
}

export default Tours;
