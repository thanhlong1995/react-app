import { useAppProvider } from '~/Context/AppProvider/AppProvider';

function ProjectInfo({ children }) {
    const valueAppProvider = useAppProvider();
    const listDataProjectInfo = valueAppProvider?.listDataProjectInfo;
    const msgError = valueAppProvider?.msgError;
    return children({ listDataProjectInfo, msgError });
}

export default ProjectInfo;
