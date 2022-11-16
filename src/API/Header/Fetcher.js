import { memo } from 'react';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';

function Fetcher({ children }) {
    const valueAppProvider = useAppProvider();
    const listNavManu = valueAppProvider?.listNavManu;
    const msgError = '';
    return children({ listNavManu, msgError });
}
export default memo(Fetcher);
