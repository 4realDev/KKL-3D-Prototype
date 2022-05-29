const Overview = ({ ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 33.52 43.41'
			stroke='#1d1d1b'
			fill='#1d1d1b'
			strokeWidth='2.23'
			strokeLinejoin='round'
			{...props}
		>
			<path
				fill='none'
				d='M22.87,10.82a5.48,5.48,0,0,1-1,3.1c-.59.16-1.2.29-1.83.4l-.63.09a18.94,18.94,0,0,1-2.52.16,18.94,18.94,0,0,1-2.52-.16l-.64-.1a16.5,16.5,0,0,1-2.38-.55,5.44,5.44,0,0,1-.86-2.94A6,6,0,0,1,16.69,5,6,6,0,0,1,22.87,10.82Z'
			/>

			<circle cx='16.69' cy='11.51' r='2.63' />

			<path
				fill='none'
				d='M31.6,7.85a15.37,15.37,0,0,1-8.7,5.92c-.7.2-1.43.36-2.18.5l-.76.11a21,21,0,0,1-3,.21,21.08,21.08,0,0,1-3-.21c-.26,0-.51-.07-.76-.12a19.32,19.32,0,0,1-2.84-.7,15.08,15.08,0,0,1-8-5.71c2.62-4,8.2-6.74,14.64-6.74S29,3.87,31.6,7.85Z'
			/>

			<path fill='none' d='M28.86,42.29H5.07l-4-10H32.27ZM23.34,20H10.8L1.25,32.28H32.41ZM17,20V32.28m9.91-6.74h-20' />
		</svg>
	);
};

export default Overview;
