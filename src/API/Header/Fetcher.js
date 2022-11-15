import { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { useAppProvider } from '~/Context/AppProvider/AppProvider';

function Fetcher({ children }) {
    const valueAppProvider = useAppProvider();
    var listMenu = valueAppProvider?.listMenu;
    const error = valueAppProvider?.error;
    return children({ listMenu, error });
}
export default memo(Fetcher);
