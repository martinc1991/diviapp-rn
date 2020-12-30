import * as React from 'react';
import Svg, { Circle, Path, Ellipse } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ToTheMoonImageComponent({ size = 1, backgroundColor = '#505050', planetColor = 'linen', moonColor = 'darkorange', rocketColor = '#f2f2f2', windowColor = 'teal', helmetColor = 'grey', wavesColor = 'teal' }) {
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
		<Svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' width={Math.floor(926 / (20 - sizing))} height={Math.floor(749 / (20 - sizing))} viewBox='0 0 926 749'>
			<Circle cx={237.905} cy={226.935} r={83.979} fill={moonColor} />
			<Path d='M926 200.96v220.88a325.991 325.991 0 01-326 326H0V526.96c0-118.03 62.73-221.42 156.68-278.63a323.577 323.577 0 0150.88-25.18 320.09 320.09 0 0131.76-10.53c.21-.07.43-.13.64-.18q4.77-1.305 9.6-2.46c.18-.05.35-.09.53-.13a326.116 326.116 0 0160.47-8.53c2.41-.11 4.82-.2 7.25-.25.87-.03 1.75-.05 2.64-.05q2.76-.06 5.55-.06z' fill={backgroundColor} />
			<Path d='M432 605.5C193.914 605.5.819 669.701.01 749h863.98c-.81-79.299-193.904-143.5-431.99-143.5z' fill={planetColor} />
			<Ellipse cx={352} cy={692} rx={80} ry={22.222} opacity={0.1} />
			<Ellipse cx={525} cy={652} rx={80} ry={22.222} opacity={0.1} />
			<Ellipse cx={352} cy={692} rx={72} ry={20} opacity={0.1} />
			<Ellipse cx={525} cy={652} rx={72} ry={20} opacity={0.1} />
			<Circle cx={138} cy={290} r={7} fill='#f2f2f2' />
			<Circle cx={740} cy={564} r={7} fill='#f2f2f2' />
			<Circle cx={410} cy={339} r={7} fill='#f2f2f2' />
			<Circle cx={757} cy={297} r={4} fill='#ff6584' />
			<Circle cx={154} cy={497} r={4} fill='#ff6584' />
			<Path fill='#f2f2f2' d='M94 581.322h-1.822V579.5h-.356v1.822H90v.356h1.822v1.822h.356v-1.822H94v-.356zM679 433.322h-1.822V431.5h-.356v1.822H675v.356h1.822v1.822h.356v-1.822H679v-.356zM830 403.322h-1.822V401.5h-.356v1.822H826v.356h1.822v1.822h.356v-1.822H830v-.356zM505 483.322h-1.822V481.5h-.356v1.822H501v.356h1.822v1.822h.356v-1.822H505v-.356zM786 493.322h-1.822V491.5h-.356v1.822H782v.356h1.822v1.822h.356v-1.822H786v-.356zM447 536.322h-1.822V534.5h-.356v1.822H443v.356h1.822v1.822h.356v-1.822H447v-.356zM575 538.322h-1.822V536.5h-.356v1.822H571v.356h1.822v1.822h.356v-1.822H575v-.356zM96 368.322h-1.822V366.5h-.356v1.822H92v.356h1.822v1.822h.356v-1.822H96v-.356z' />
			<Path fill='#e6e6e6' d='M676.997 230.689h2.874v58.063h-2.874zM611.748 385.046l-26.445 60.938 5.174 8.623-1.725 2.874 12.073 6.324v-3.449l4.599-1.15 19.546-35.643-13.222-38.517z' />
			<Path d='M591.052 456.907s-19.546 30.468 2.3 35.068 4.023-32.194 4.023-32.194z' fill='#e6e6e6' />
			<Path d='M619.221 443.11l-6.899 22.42-2.874 28.744-5.174 10.348 5.749 46.566 9.198 9.198 4.024 45.99v20.697l10.923 18.97-14.066 19.965a6.36 6.36 0 004.99 10.031c3.106.082 7.2-.796 12.525-3.55 16.672-8.624 16.097-16.672 16.097-16.672s10.348 0 10.923-8.049-6.324-65.536-6.324-65.536l-6.323-24.72V490.25h2.3l1.149 57.488 5.174 21.271.575 9.198 7.473 91.982s33.344 9.198 35.068 1.725-12.647-12.073-12.647-12.073l8.623-16.672v-32.193l-2.874-6.899-5.174-46.566 8.623-9.198 4.599-5.749v-45.99l-5.749-17.822-1.725-14.947-9.198-22.995s-41.966-13.797-68.986 2.3z' fill='#fff' />
			<Path d='M693.956 313.185a43.691 43.691 0 11-78.76-26.06l.012-.01a43.687 43.687 0 0178.748 26.07z' fill={helmetColor} />
			<Path d='M687.747 295.07l-3.564 20.415c-26.784-69.527-69.388-26.819-70.124-26.071a43.69 43.69 0 0173.688 5.657z' opacity={0.1} />
			<Path d='M688.897 292.771l-3.564 20.414c-26.784-69.526-69.389-26.818-70.125-26.07a43.69 43.69 0 0173.69 5.656z' fill='#fff' />
			<Path d='M682.908 284.153l5.99 20.79s-12.433 37.263-70.087 38.562l-1.89 5.323-6.323 1.725-2.875 12.072 8.049 76.46s-3.45 7.474 2.3 6.899c0 0 37.942-12.648 70.71-1.15 0 0 6.899 2.874 5.174-3.45 0 0 22.996-14.371 21.271-29.318s1.725-84.509 1.725-84.509 3.449-20.12-6.899-24.72c0 0-15.198-21.272-27.145-18.684z' fill='#fff' />
			<Path d='M670.304 429.418s-36.018 3.617-26.048 23.591 27.725-16.85 27.725-16.85z' fill='#e6e6e6' />
			<Path d='M688.782 340.205s-6.324 7.473-4.024 19.546 10.923 39.092 10.923 39.092l-30.47 28.17 9.2 12.647 41.39-21.27 9.199-5.75A238.507 238.507 0 00708.108 345l-1.504-3.645s-10.923-4.6-17.822-1.15z' fill='#e6e6e6' />
			<Circle cx={685.908} cy={309.161} r={10.635} fill='#e6e6e6' />
			<Circle cx={678.434} cy={230.402} r={7.761} fill='#e6e6e6' />
			<Path fill='#f2f2f2' d='M481 352.322h-1.822V350.5h-.356v1.822H477v.356h1.822v1.822h.356v-1.822H481v-.356zM645 296.322h-1.822V294.5h-.356v1.822H641v.356h1.822v1.822h.356v-1.822H645v-.356zM627 313.322h-1.822V311.5h-.356v1.822H623v.356h1.822v1.822h.356v-1.822H627v-.356z' />
			<Circle cx={556} cy={267} r={4} fill='#f2f2f2' />
			<Path d='M358.958 295.195c0 279.043-35.089 279.043-78.36 279.043-22.371 0-42.553 0-56.826-38.545-4.103-11.078-7.728-25.363-10.767-43.75-6.843-41.333-10.767-103.447-10.767-196.749 0-35.877 4.247-71.05 10.767-103.9 3.135-15.816 6.796-31.082 10.767-45.64 4.858-17.826 10.181-34.587 15.553-49.924a769.071 769.071 0 0110.767-28.927C266.398 25.553 280.598 0 280.598 0s78.36 141.083 78.36 295.195z' fill={rocketColor} />
			<Path d='M250.092 66.803v486.5h-10.767V95.73a769.153 769.153 0 0110.767-28.927z' opacity={0.1} />
			<Circle cx={278.205} cy={192.609} r={43.068} fill={windowColor} />
			<Path d='M372.716 547.92c-9.576-23.572-21.872-27.64-29.909-27.286v-3.82H217.193v3.82c-8.037-.353-20.333 3.714-29.909 27.285C171.732 586.202 196.855 652 196.855 652s-13.426-91.767 31.158-92.371A52.762 52.762 0 00242 572.319V597h72v-22.434a52.707 52.707 0 0017.987-14.937c44.584.604 31.158 92.371 31.158 92.371s25.123-65.798 9.57-104.08z' fill='#009688' />
			<Circle cx={278.205} cy={192.609} r={33.497} fill={windowColor} />
			<Path d='M846.01 200.96h-2A82.085 82.085 0 00926 282.5v-2a80.079 80.079 0 01-79.99-79.54z' fill={wavesColor} />
			<Path d='M809.01 200.96h-2A119.115 119.115 0 00926 319.5v-2a117.122 117.122 0 01-116.99-116.54z' fill={wavesColor} />
			<Path d='M771 200.96h-2c.25 86.36 70.58 156.54 157 156.54v-2c-85.32 0-154.75-69.28-155-154.54z' fill={wavesColor} />
		</Svg>
	);
}

export default ToTheMoonImageComponent;
