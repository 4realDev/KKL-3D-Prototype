import React from 'react';

const Drinks = ({ ...props }) => {
	return (
		<svg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M6.35089 9.0999H5.30089V6.75203L8.46476 3.58834C8.75576 3.29734 8.5497 2.7999 8.13814 2.7999H1.26364C0.852074 2.7999 0.646011 3.29734 0.937011 3.58834L4.10089 6.75203V9.0999H3.05089C2.6367 9.0999 2.30089 9.43572 2.30089 9.8499C2.30089 9.93278 2.36801 9.9999 2.45089 9.9999H6.95089C7.03376 9.9999 7.10089 9.93278 7.10089 9.8499C7.10089 9.43572 6.76507 9.0999 6.35089 9.0999ZM8.90089 0.399902C7.72695 0.399902 6.73807 1.15365 6.36626 2.1999H7.35139C7.66357 1.66459 8.2377 1.2999 8.90089 1.2999C9.89332 1.2999 10.7009 2.10728 10.7009 3.0999C10.7009 4.09253 9.89332 4.8999 8.90089 4.8999C8.63764 4.8999 8.3892 4.8399 8.16364 4.7379L7.50251 5.39903C7.91145 5.6484 8.38695 5.7999 8.90089 5.7999C10.3921 5.7999 11.6009 4.59109 11.6009 3.0999C11.6009 1.60871 10.3921 0.399902 8.90089 0.399902Z'
				fill='#575B64'
			/>
		</svg>
	);
};

export default Drinks;