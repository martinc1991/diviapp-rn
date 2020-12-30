import * as React from 'react';
import Svg, { Path, Circle, G, Ellipse, Rect } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function LaunchingImageComponent({ size = 1, backgroundColor = 'lightblue', rocketColor = 'white', rocketFireColor = 'darkorange', shirtColor = 'teal', jacketColor = 'darkslategrey', pantsColor = '#202020', skinColor = 'pink', hairColor = 'black' }) {
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
		<Svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' width={Math.floor(1144 / (20 - sizing))} height={Math.floor(800.93 / (20 - sizing))} viewBox='0 0 1144 800.93'>
			<Path d='M1142.92 572.47a244.09 244.09 0 01-8.87 40.61 229 229 0 01-15.08 37c0 82.51-66.1 149.39-147.65 149.39H218.25A186.28 186.28 0 0188 746.37c.32-.09.65-.18 1-.25 69.46-18.42 142.75-24.78 203-68.53q-123.15-20.43-244.86-50.71c-5-1.26-10.68-3.15-16.51-5.13-.27-4.16-.42-8.35-.42-12.57-.37-.67-.73-1.34-1.09-2q-2.38-4.43-4.58-9c-14.93-31-23.46-66.91-23.46-105.23 0-60.43 21.23-115 55.25-153.49 228.87 18.93 459.11 10.91 688.67 2.83q-100.68-20-201.34-40.06-164.17-32.65-328.34-65.34c69.85-98.68 193.12-164.21 333.54-164.21 98.82 0 189.14 32.45 258.34 86.07 25.44-16.91 54.73-26.56 85.9-26.56 64.9 0 121.63 41.73 152.44 104 15.58 31.5 24.52 68.24 24.52 107.48 0 7-.29 14-.86 20.89 0 .41-.06.81-.1 1.23 21.4 17.8 39.35 41.1 52.41 68.19.16.33.32.66.47 1q3.43 7.17 6.38 14.66h-.19q-12.6 2.79-25.17 5.69-135.49 31.3-268.47 75.86-38.12 12.78-76 26.62c-21.32 7.8-48.74 25.47-70.84 27 151.1-10.14 303.41 4.64 453.81-12.2z' fill={backgroundColor} opacity={0.1} />
			<Path d='M1144 537.22c0-71.93-30.06-135.47-76-173.67q.95-10.9 1-22.11c0-116.8-79.24-211.47-177-211.47-31.18 0-60.47 9.64-85.91 26.55-69.2-53.62-159.53-86.05-258.35-86.05-160.74 0-299.1 85.9-360.46 209.13-3.41-.23-6.84-.36-10.3-.36-97.74 0-177 94.68-177 211.47 0 42.94 10.72 82.88 29.12 116.23 0 105.08 84.19 190.27 188 190.27h753.14c81.54 0 147.64-66.88 147.64-149.39 16.56-32.18 26.12-70.05 26.12-110.6z' fill={backgroundColor} opacity={0.1} />
			<Path d='M398.72 542.79c.3 4 1.42 8.75 5.19 10.13a9.67 9.67 0 005.56-.09 23.55 23.55 0 0012.35-7.07c3.15-3.66 4.72-8.83 3.4-13.46-1.27-4.42-4.83-7.73-7.34-11.57-2.94-4.49-3.88-9.58-5.92-14.39-16.19 1.55-14.15 24.44-13.24 36.45z' fill={skinColor} />
			<Path d='M381.71 350c-2.15 7 5.48 14.63 7.94 21.51s5.77 13.49 7.09 20.7c.92 4.95.87 10 1.22 15 .67 9.45 2.76 18.73 5 27.92q4.74 19.92 10.16 39.66a146.55 146.55 0 014.23 18.24 70.07 70.07 0 01-.07 20.09 25.66 25.66 0 00-19.08 1.75 56.61 56.61 0 01-7.25-23.59 123.39 123.39 0 01.13-14.77c.64-13.91-5.39-27.84-5.59-41.77a78.81 78.81 0 00-1.14-14.4c-.65-3.27-.59-9.39-1.3-12.64-1.14-5.18 3.73-7.57 3.46-12.88l-1.48-29c-.3-5.04-5.4-11.26-3.32-15.82z' fill={jacketColor} />
			<Path d='M381.71 350c-2.15 7 5.48 14.63 7.94 21.51s5.77 13.49 7.09 20.7c.92 4.95.87 10 1.22 15 .67 9.45 2.76 18.73 5 27.92q4.74 19.92 10.16 39.66a146.55 146.55 0 014.23 18.24 70.07 70.07 0 01-.07 20.09 25.66 25.66 0 00-19.08 1.75 56.61 56.61 0 01-7.25-23.59 123.39 123.39 0 01.13-14.77c.64-13.91-5.39-27.84-5.59-41.77a78.81 78.81 0 00-1.14-14.4c-.65-3.27-.59-9.39-1.3-12.64-1.14-5.18 3.73-7.57 3.46-12.88l-1.48-29c-.3-5.04-5.4-11.26-3.32-15.82z' opacity={0.1} />
			<Path d='M308.7 327.55a11 11 0 002.3 4.62 256.32 256.32 0 0034.43 39 18.42 18.42 0 003.24-4.56 68.67 68.67 0 008.4-34.62c-5.78-1.86-12.34-4.46-14.19-10.24-1.47-4.56.5-10-2.08-14.06-3.67-5.73-19.25-6.46-24.25-2.3-3.28 2.72-2.11 5.26-3.15 8.94-1.15 4.04-5.34 8.92-4.7 13.22z' fill={skinColor} />
			<Path d='M308.7 327.55a11 11 0 002.3 4.62 256.32 256.32 0 0034.43 39 18.42 18.42 0 003.24-4.56 68.67 68.67 0 008.4-34.62c-5.78-1.86-12.34-4.46-14.19-10.24-1.47-4.56.5-10-2.08-14.06-3.67-5.73-19.25-6.46-24.25-2.3-3.28 2.72-2.11 5.26-3.15 8.94-1.15 4.04-5.34 8.92-4.7 13.22z' opacity={0.1} />
			<Path d='M313.9 789.8a13.49 13.49 0 005.48 2.3 183.85 183.85 0 0058.19 4.79c2.61-.21 6.09-1.6 5.45-4.14-.6-2.37-4-2.21-6.3-2.92-2.17-.66-3.8-2.41-5.42-4-6-6-13.26-10.54-20.42-15.08a18.44 18.44 0 00-5.75-2.78c-2.47-.56-5.05-.09-7.55.39-6.3 1.19-18.31 1-23.3 5.65-3.99 3.7-4.57 12.12-.38 15.79zM387 784.81c0 1.55.18 3.29 1.36 4.28a5 5 0 003.23.88 22.56 22.56 0 0019.77-12l28-3.27c5.3-.62 10.7-1.27 15.57-3.46 5.75-2.6 10.34-7.17 14.79-11.64a5.92 5.92 0 001.73-2.49c.46-1.76-.88-3.61-2.57-4.31a10.32 10.32 0 00-5.41-.3c-13.67 1.89-27.39 8-40.77 4.6-3.27-.83-6.52-2.24-9.89-2a20.43 20.43 0 00-5.28 1.41c-4.35 1.6-17.36 3.87-20.24 7.55s-.29 16.35-.29 20.75z' fill={jacketColor} />
			<Path d='M316.19 472.16c-4 6.23-12.43 7.59-18.32 12.06-9.05 6.87-10.58 19.67-11.1 31-.35 7.84-.57 15.8 1.17 23.46 1.22 5.33 3.36 10.41 5 15.64 3.5 11.37 4.48 23.35 5 35.23 1.37 30 .15 60.19 4 90 1.11 8.53 2.62 17 3.46 25.56 2.76 28.32-1.92 57.52 5.67 84.94a44.14 44.14 0 0131.73-14.21c2.5 0 5.11.15 7.41-.86s4.12-3.69 3.16-6a18.37 18.37 0 00-2-2.84c-3.31-5 2.31-12.07-.09-17.58-.93-2.12-2.94-3.69-3.53-5.92-.63-2.42.59-4.9.93-7.38.68-5-2.19-9.66-3.68-14.45-2.25-7.25-1.35-15-.57-22.59a641.92 641.92 0 003.39-74.66c-.21-16.87-1.05-34.1 3.81-50.26a128.19 128.19 0 0123.12 29.26c3.88 6.61 7.23 13.67 8.52 21.23.94 5.55.76 11.22.57 16.84q-1.44 43.15-2.89 86.3c-.58 17.4-1.08 35.31 4.95 51.63 15.33-8.16 31-16 46.33-24.21-.25-5.65-7.85-7.72-10.65-12.63a15.8 15.8 0 01-1.6-6.59c-1.94-23.38 2.83-46.74 7.24-69.78 1.68-8.78 3.32-17.63 3.31-26.56 0-14.18-4.15-28-8.44-41.51-4.54-14.31-9.29-28.56-14-42.81-3-9.15-6.1-18.31-9.92-27.17-3.6-8.38-7.88-16.47-10.95-25-4.93-13.78-6.62-28.47-8.27-43-20.84 4.09-41.95 8.7-62.76 12.86z' fill={pantsColor} />
			<Circle cx={326.66} cy={288.64} r={29.22} fill={skinColor} />
			<Path d='M337.59 359.29l-2.12-15.82a9.74 9.74 0 00-5.06-8.57l-20.36-14.88c-1-.76-2.38-1.56-3.54-1a3.37 3.37 0 00-1.41 2.08c-3.22 9.5-1.23 19.86-.11 29.83.95 8.31 1.27 16.68 1.59 25a184.69 184.69 0 01-.06 22.69c-1.1 13.08-5 26.24-2.39 39.11 1.72 8.51 4.75 16.42 5.46 25.08.49 6 .34 12.1 2.24 17.78 7-3 14.92-2.67 22.53-2.27l18.47 1a33.51 33.51 0 007.69-.18 26.05 26.05 0 008.07-3.16 55.39 55.39 0 0016.85-14.7c-3.12-15.07-.09-30.63-2.17-45.88-1.19-8.79-4.17-17.26-5.57-26-1.72-10.79-1.05-22-4.14-32.48a93.69 93.69 0 00-6.64-15.38 28.37 28.37 0 00-12.71-12.95 7.17 7.17 0 00-3.34-.85c-2.94.17-4.76 3.29-5.58 6.13-1 3.4-1.28 7-2.06 10.41-1.12 4.99-2.74 10.8-5.64 15.01z' fill={shirtColor} />
			<Path d='M277.7 547.79c3.89 4.12 11 3.11 15.52-.28 9.84-7.37 10.75-21.48 11.29-33.76.2-4.4.5-9 2.57-12.86 3.16-5.95 9.71-9.09 15.15-13.08 12.9-9.44 20.47-25 22.74-40.78s-.34-32-4.7-47.37c-7.54-26.57-20.24-51.34-33.13-75.76a5.68 5.68 0 00-1.79-2.3c-2.62-1.62-5.46 1.59-7.26 4.1-6.07 8.5-16.07 13.06-25.23 18.09s-18.52 11.73-21.29 21.8c-1.86 6.75-.41 13.93 1 20.78s6.43 12.29 10.12 18.1a173.87 173.87 0 0111.67 19.89 38.22 38.22 0 013 8.06 49 49 0 01.79 10c.21 20.72.42 41.51-2.08 62.08-1.42 11.64-3.7 23.32-2.66 35 .25 3.14 2.07 5.97 4.29 8.29z' fill={jacketColor} />
			<Path d='M302.4 509.17c4.16 1.86 8.37 3.79 12.87 4.53s9.43.14 13-2.65 5.45-8.07 3.41-12.15a60.37 60.37 0 009.6-.46c1.83-.23 4.05-.93 4.33-2.75.32-2.12-2.24-3.4-4.31-4l-11.16-3.07a29.76 29.76 0 00-16.41-1.24l-17 2.6a3 3 0 00-1.28.4 3.07 3.07 0 00-1 1.68c-.82 2.59-4.61 9.83-3.31 12.41 1.16 2.21 8.93 3.53 11.26 4.7z' fill={skinColor} />
			<Path d='M409 520.13a17.28 17.28 0 01-10.85 9.51 6.07 6.07 0 01-3.24.21c-2-.56-3.1-2.65-3.93-4.55-19.8-45.08-18.69-96.39-31.29-144-3.74-14.13-8.74-28.33-7.83-42.92.16-2.61.71-5.55 2.89-7 1.94-1.3 4.58-.95 6.7 0s4 2.5 6 3.56c3.31 1.69 7.16 2.17 10.34 4.08 4.72 2.83 7.14 8.24 9.25 13.32 4.51 10.84 9 22 9.35 33.76.77 22.84-9.36 44.79-4.09 67 1.05 4.4 2.6 8.67 4.08 12.94a391.57 391.57 0 0113 46.81c.55 2.72.67 4.79-.38 7.28z' fill={jacketColor} />
			<Path d='M307.71 291.21c1.75-2.83 4.18-5.32 5.12-8.51.67-2.27.53-4.73 1.34-7 2-5.48 8.94-7.5 14.69-6.56s10.92 4 16.54 5.53c3.11.86 7.43.6 8.31-2.51.58-2.06-.81-4.1-2.13-5.79L335 245.21c-2.18.56-4.62 1.08-6.6 0-1.14-.63-2-1.74-3.27-2.1-3.45-1-6.34 4.31-9.8 3.39-1-.26-1.79-1-2.79-1.08-2.79-.23-3.84 4.39-6.63 4.62-1.16.1-2.28-.64-3.43-.53a4.36 4.36 0 00-2.59 1.61c-5.55 5.89-7.8 14.34-7.5 22.42s-1.09 15.92 2 23.38c1.36 3.26 4.12 7.1 7.47 6 0-4.4 4.1-8.79 4.15-13.19' fill={hairColor} />
			<Path d='M364.17 586.99a126.89 126.89 0 00-21.57-26.71c-4.86 16.16-4 33.39-3.81 50.26a641.92 641.92 0 01-3.39 74.66c-.79 7.55-1.68 15.34.57 22.59 1.49 4.79 4.36 9.47 3.68 14.45-.34 2.48-1.56 5-.93 7.38.59 2.23 2.6 3.8 3.53 5.92 2.4 5.51-3.22 12.56.09 17.58a18.37 18.37 0 012 2.84c1 2.32-.86 5-3.16 6s-4.91.83-7.41.86a44.19 44.19 0 00-26.14 9.11 116.84 116.84 0 003.41 18.1 44.14 44.14 0 0131.73-14.21c2.5 0 5.11.15 7.41-.86s4.12-3.69 3.16-6a18.37 18.37 0 00-2-2.84c-3.31-5 2.31-12.07-.09-17.58-.93-2.12-2.94-3.69-3.53-5.92-.63-2.42.59-4.9.93-7.38.68-5-2.19-9.66-3.68-14.45-2.25-7.25-1.36-15-.57-22.59a641.92 641.92 0 003.39-74.66c-.21-16.87-1.05-34.1 3.81-50.26a124.25 124.25 0 0112.57 13.71z' opacity={0.1} />
			<G opacity={0.1}>
				<Path d='M292.42 274.47v-4.14c-.06 1.07-.06 2.14 0 3.2-.01.34-.01.65 0 .94zM345.4 270.72c-5.62-1.54-10.8-4.58-16.54-5.53s-12.71 1.08-14.69 6.56c-.81 2.22-.67 4.68-1.34 7-.94 3.19-3.37 5.68-5.12 8.51l-1.65-1.46c-.05 4.4-4.1 8.79-4.15 13.19-3.35 1.09-6.11-2.75-7.47-6a30.31 30.31 0 01-2.08-11.26c-.09 5.23 0 10.32 2.08 15.26 1.36 3.26 4.12 7.1 7.47 6 0-4.4 4.1-8.79 4.15-13.19l1.65 1.46c1.75-2.83 4.18-5.32 5.12-8.51.67-2.27.53-4.73 1.34-7 2-5.48 8.94-7.5 14.69-6.56s10.92 4 16.54 5.53c3.11.86 7.43.6 8.31-2.51a4.44 4.44 0 00-.39-3.11c-1.39 2.25-5.14 2.37-7.92 1.62z' />
			</G>
			<Path d='M250.89 395.38a149.69 149.69 0 01-3.68 18.09l-7 28.53c-.75 3-1.5 6.16-1.17 9.27.46 4.19 2.84 7.9 5.25 11.36a226.67 226.67 0 0049.58 51.44c-1.11-5.7 2.84-11 6.55-15.48s7.33-8.77 12.18-11.67q-18.22-17.12-35.26-35.45a18.56 18.56 0 01-3.06-4c-2.74-5.29 0-11.61 2.38-17.07 7.53-17.39 11.09-37.13 6.26-55.45-1.82-6.89-5-13.77-10.79-18-2.53-1.85-6-3.1-8.76-1.71a9.77 9.77 0 00-3 2.7c-8.99 10.99-7.92 24.14-9.48 37.44z' fill={jacketColor} />
			<Ellipse cx={256.76} cy={793.24} rx={29.24} ry={5.62} fill={shirtColor} />
			<Ellipse cx={256.27} cy={790.85} rx={3.4} ry={4.46} fill={jacketColor} />
			<Ellipse cx={256.27} cy={785.4} rx={3.4} ry={4.46} fill={jacketColor} />
			<Ellipse cx={256.27} cy={779.96} rx={3.4} ry={4.46} fill={jacketColor} />
			<Ellipse cx={256.27} cy={774.51} rx={3.4} ry={4.46} fill={jacketColor} />
			<Ellipse cx={256.27} cy={769.06} rx={3.4} ry={4.46} fill={jacketColor} />
			<Ellipse cx={256.27} cy={763.62} rx={3.4} ry={4.46} fill={jacketColor} />
			<Ellipse cx={256.27} cy={758.17} rx={3.4} ry={4.46} fill={jacketColor} />
			<Path d='M269 720.9a15.77 15.77 0 001.27-1.87l-8.94-1.47 9.67.07a16.35 16.35 0 00.31-12.92l-13 6.73 12-8.79a16.31 16.31 0 10-26.93 18.25 15.94 15.94 0 00-1.86 3l11.61 6-12.38-4.15a16.31 16.31 0 002.63 15.31 16.31 16.31 0 1025.63 0 16.3 16.3 0 000-20.16z' fill={shirtColor} />
			<Path d='M239.89 730.98a16.21 16.21 0 003.49 10.08 16.31 16.31 0 1025.63 0c2.19-2.77-29.12-11.91-29.12-10.08z' opacity={0.1} />
			<Ellipse cx={920.19} cy={794.14} rx={40.21} ry={6.8} fill={shirtColor} />
			<Path d='M936.82 783.02a11.66 11.66 0 003.83-5.78c.5-2.3-.48-5.06-2.68-5.9-2.46-.94-5.09.77-7.08 2.49s-4.28 3.69-6.88 3.32a10.5 10.5 0 003.24-9.81 4.12 4.12 0 00-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.65-6.65 10.72-6.68 17.07-.52-2.29-.08-4.68-.09-7s-.66-5-2.65-6.22a7.92 7.92 0 00-4-.95c-2.33-.09-4.94.15-6.53 1.86-2 2.12-1.47 5.68.25 8s4.35 3.81 6.77 5.42a15 15 0 014.83 4.61 4.16 4.16 0 01.36.83h14.66a40.77 40.77 0 009.03-6.26z' fill={shirtColor} />
			<Path fill={jacketColor} d='M733.75 415.98l.87-1.94-1.16-.52-.87 1.94-4.55 4.95 5.05 2.26.66-6.69z' />
			<Path fill={jacketColor} d='M738.79 418.3l.89-1.99-1.19-.54-.89 1.99-4.67 5.08 5.18 2.32.68-6.86z' />
			<Path fill={jacketColor} d='M743.85 420.5l.87-1.94-1.17-.52-.87 1.94-4.55 4.95 5.05 2.26.67-6.69zM779.8 436.66l.89-1.99-1.19-.54-.89 1.99-4.67 5.08 5.18 2.32.68-6.86zM784.98 438.98l.89-1.99-1.19-.54-.9 1.99-4.66 5.08 5.18 2.32.68-6.86zM790.15 441.29l.9-1.99-1.2-.53-.89 1.99-4.66 5.08 5.17 2.32.68-6.87zM756.31 426.14l.89-1.99-1.19-.54-.89 2-4.67 5.08 5.18 2.31.68-6.86zM761.49 428.46l.89-1.99-1.2-.54-.89 1.99-4.66 5.08 5.17 2.32.69-6.86zM766.66 430.77l.89-1.99-1.19-.53-.89 1.99-4.67 5.08 5.18 2.32.68-6.87z' />
			<Path d='M813.43 284.67c2.92-6.92.09-22.66-4.26-24.61s-17.59 6.6-20.81 13.39l-.2-.1-61.68 137.76 25.28 11.36 61.68-137.8zM859.62 305.35c2.91-6.92.09-22.66-4.27-24.61s-17.58 6.6-20.8 13.39l-.21-.1-61.68 137.76L798 443.11l61.68-137.76z' fill={rocketColor} />
			<Path d='M864.89 230.59c4.35-10.12 4-31.48-.32-33.43s-20.1 12.22-24.75 22.21l-.2-.1-90.45 202 25.28 11.32 90.45-202z' fill={rocketColor} />
			<Rect x={883.82} y={255} width={5.23} height={11.34} rx={2.62} transform='rotate(24.12 988.369 170.384)' fill={jacketColor} />
			<Path d='M662.17 448.3l25.68 3.46c4.15.56 8.57 1.08 12.38-.66 6.31-2.89 8.71-10.87 14.52-14.65 6.55-4.27 16.12-1.56 20.69 4.78 1.2 1.68 2.15 3.59 3.79 4.84 6.57 5 17-4.4 23.88.24 3.43 2.33 4.51 7.54 8.43 8.92 2.59.91 5.45-.27 8.19-.05 6.85.55 9.94 9.34 8.5 16.06s-5.6 12.66-6.72 19.43 2.94 15.41 9.79 15' fill={rocketFireColor} opacity={0.3} />
			<Circle cx={815} cy={77} r={12} fill={shirtColor} opacity={0.1} />
			<Circle cx={960} cy={12} r={12} fill={shirtColor} opacity={0.1} />
			<Circle cx={900} cy={57} r={12} fill={shirtColor} opacity={0.1} />
			<Circle cx={1041} cy={161} r={12} fill={shirtColor} opacity={0.1} />
			<Circle cx={972} cy={89} r={12} fill={shirtColor} opacity={0.1} />
		</Svg>
	);
}

export default LaunchingImageComponent;
