import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import theme from '../../features/theme';
import currency from '../../features/currency';
import api from '../../features/api';
import homeMarketGraphs from '../../features/homeMarketGraphs';
import portfolio from '../../features/portfolio';

export const store = configureStore({
	reducer: {
		theme,
		currency,
		api,
		homeMarketGraphs,
		portfolio,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
