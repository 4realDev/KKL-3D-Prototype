import React from 'react';

const Basket = ({ ...props }) => {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M8.069 14.75H18.575C19.2485 14.75 19.853 14.2925 20.045 13.6318L22.4923 5H6.32825L5.7035 2H2.75C2.336 2 2 2.336 2 2.75C2 3.164 2.336 3.5 2.75 3.5H4.484L6.57125 13.517C6.719 14.2317 7.349 14.75 8.069 14.75ZM8.03975 13.2118L6.641 6.5H20.5055L18.575 13.25L8.03975 13.2118Z'
				fill='white'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M6.5 18.875C6.5 17.4253 7.67525 16.25 9.125 16.25C10.5747 16.25 11.75 17.4253 11.75 18.875C11.75 20.3247 10.5747 21.5 9.125 21.5C7.67525 21.5 6.5 20.3247 6.5 18.875ZM10.25 18.875C10.25 18.2548 9.74525 17.75 9.125 17.75C8.50475 17.75 8 18.2548 8 18.875C8 19.4952 8.50475 20 9.125 20C9.74525 20 10.25 19.4952 10.25 18.875Z'
				fill='white'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M14.75 18.875C14.75 17.4253 15.9253 16.25 17.375 16.25C18.8247 16.25 20 17.4253 20 18.875C20 20.3247 18.8247 21.5 17.375 21.5C15.9253 21.5 14.75 20.3247 14.75 18.875ZM18.5 18.875C18.5 18.2548 17.9952 17.75 17.375 17.75C16.7548 17.75 16.25 18.2548 16.25 18.875C16.25 19.4952 16.7548 20 17.375 20C17.9952 20 18.5 19.4952 18.5 18.875Z'
				fill='white'
			/>
		</svg>
	);
};

export default Basket;
