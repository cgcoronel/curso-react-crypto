import React from 'react';
import PropTypes from 'prop-types';

class OptionSelect extends React.Component {
	render () {
		const {id, name} = this.props.moneda;
		return (
				<option value={id}>{name}</option>
		)
	}
}

OptionSelect.propType = {
	moneda: PropTypes.Object
}

export default OptionSelect;
