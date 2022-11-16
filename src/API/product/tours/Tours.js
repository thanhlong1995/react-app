import { useAppProvider } from '~/Context/AppProvider/AppProvider';

function Tours({ children }) {
    const valueAppProvider = useAppProvider();
    var listDataProjectInfo = valueAppProvider?.listDataProjectInfo;
    const msgError = valueAppProvider?.msgError;
    return children({ listDataProjectInfo, msgError });
}

export default Tours;
