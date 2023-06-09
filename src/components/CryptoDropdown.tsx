import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { fetchCoinById, fetchGraphData, setMarketData } from '../features/homeMarketGraphs';

const CryptoDropdown = () => {
	const dispatch = useAppDispatch();
	const { userSelection } = useAppSelector((state) => state.homeMarketGraphs);

	const handleCoinSelection = (coin: string) => {
		dispatch(setMarketData(coin));
		dispatch(fetchGraphData());
		dispatch(fetchCoinById());
	};

	return (
		<div className="relative inline-block border-none">
			<div className="bg-inherit rounded-md py-2 pr-10 text-sm font-medium border-none flex items-center">
				{userSelection[0].toUpperCase() + userSelection.slice(1)} Overview{' '}
				<span className="ml-1">
					<FaAngleDown />
				</span>
			</div>
			<select
				className="appearance-none bg-transparent opacity-0 absolute top-0 left-0 h-full w-2/12 cursor-pointer dark:bg-darkBg bg-lightModeWhite pr-8"
				id="crypto-select"
				value={userSelection}
				onChange={(e) => handleCoinSelection(e.target.value)}
				aria-label="Crypto Select"
			>
				<option value="bitcoin">Bitcoin</option>
				<option value="ethereum">Ethereum</option>
			</select>
		</div>
	);
};

export default CryptoDropdown;
