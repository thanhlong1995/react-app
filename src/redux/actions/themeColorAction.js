import { ThemeColorAction } from '../constants/theme-color-action-types';

export const setThemeColor = (color) => {
    return {
        type: ThemeColorAction.SET_THEME_COLOR,
        payload: color,
    };
};
