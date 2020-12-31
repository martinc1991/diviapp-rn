import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function EmailIconComponent({ size = 1, topColor = 'teal', bottomColor = 'teal' }) {
	// Preventing the case where size == 20 (cant divide by 0)
	var sizing = 1;
	if (size >= 20) {
		sizing = 19;
	} else if (size < 1) {
		sizing = 1;
	} else {
		sizing = size;
	}
	// Preventing the case where size == 20 (cant divide by 0)
	return (
		<Svg height={Math.floor(512 / (20 - sizing))} viewBox='0 0 511.996 511.996' width={Math.floor(512 / (20 - sizing))} xmlns='http://www.w3.org/2000/svg'>
			<G>
				<Path d='M230.9 253.371c13.369 8.913 36.827 8.914 50.199-.001l.007-.004 227.865-151.911c-7.474-21.616-28.018-37.188-52.142-37.188H55.166c-24.125 0-44.668 15.572-52.143 37.188l227.87 151.912.007.004z' fill={topColor} />
				<Path d='M297.746 278.328l-.007.005c-11.702 7.801-26.724 11.702-41.741 11.702-15.02 0-30.036-3.9-41.739-11.703l-.005-.003L0 135.494v257.072c0 30.417 24.747 55.163 55.166 55.163h401.666c30.418 0 55.164-24.746 55.164-55.163V135.494z' fill={bottomColor} />
			</G>
		</Svg>
	);
}

export default EmailIconComponent;
