import { useAppProvider } from '~/Context/AppProvider/AppProvider';

function ProjectInfo({ children }) {
    const valueAppProvider = useAppProvider();
    var listDataProjectInfo = valueAppProvider?.listDataProjectInfo;
    const msgError = valueAppProvider?.msgError;
    return children({ listDataProjectInfo, msgError });
}

export default ProjectInfo;
