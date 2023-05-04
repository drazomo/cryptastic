import React from 'react';

interface PortfolioIconProps {
	darkMode?: boolean;
	selected?: boolean;
	className?: string;
}

export const PortfolioIcon: React.FC<PortfolioIconProps> = ({ selected, darkMode, className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="47"
			height="48.337"
			viewBox="0 0 47 48.337"
			className={className}
		>
			<g id="Group_3708" data-name="Group 3708" transform="translate(-217.417 -866.69)">
				<text
					id="Portfolio"
					transform="translate(217.417 911.027)"
					fill={darkMode ? '#fff' : selected ? '#00ff5f' : '#000'}
					fontSize="11"
					fontFamily="Poppins, sans-serif"
					fontWeight="600"
				>
					<tspan x="0" y="0">
						Portfolio
					</tspan>
				</text>
				<g
					id="Iconly_Broken_Document"
					data-name="Iconly/Broken/Document"
					transform="translate(223.861 863.93)"
				>
					<g id="Document" transform="translate(4.139 2.759)">
						<path
							id="Document-2"
							data-name="Document"
							d="M13.8,27.592a1.013,1.013,0,0,1,0-2.01h3.929c3.387,0,5.093-1.742,5.093-5.176V7.188c0-3.436-1.706-5.178-5.093-5.178H7.089C3.7,2.01,1.983,3.752,1.983,7.188V20.405c0,3.434,1.717,5.176,5.106,5.176a1.013,1.013,0,0,1,0,2.01C2.655,27.592,0,24.9,0,20.405V7.188C0,2.68,2.655,0,7.089,0H17.733c4.433,0,7.087,2.692,7.1,7.188V20.405c0,4.495-2.643,7.187-7.089,7.187ZM7.436,20.636H7.425a1,1,0,0,1,0-2h9.947a1,1,0,0,1,0,2ZM17.372,14.8H7.425a1.013,1.013,0,0,1,0-2.01h9.947a.993.993,0,0,1,.955.467,1.028,1.028,0,0,1,0,1.075,1,1,0,0,1-.846.474A.983.983,0,0,1,17.372,14.8ZM7.436,8.966a1.013,1.013,0,0,1,0-2.01h3.785a1.013,1.013,0,0,1,0,2.01Z"
							fill={darkMode ? '#fff' : selected ? '#00ff5f' : '#000'}
						/>
					</g>
				</g>
			</g>
		</svg>
	);
};
