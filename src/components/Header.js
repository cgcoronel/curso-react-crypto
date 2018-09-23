import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
	return (
		<header>
				<h1 className='text-center'>{props.title}</h1>
		</header>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export default Header;
