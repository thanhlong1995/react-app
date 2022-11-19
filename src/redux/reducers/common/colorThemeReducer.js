import { ThemeColorAction } from '../../constants/common/theme-color-action-types';
const initial = {
    color: 'dark',
};
export const colorThemeReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case ThemeColorAction.SET_THEME_COLOR:
            return { color: payload };

        default:
            return state;
    }
};
