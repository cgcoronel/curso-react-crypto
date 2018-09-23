import React from 'react';
import PropTypes from 'prop-types';

class Resultado extends React.Component {

	mostrarResultado = () => {
		const monedaCotizada = this.props.monedaCotizada;
		const {name, quotes} = this.props.cotizacion;

		if(!name) return null;

		const {price, percent_change_1h, percent_change_24h} = quotes[monedaCotizada];

		return (
			<div className='bg-success py-4'>
					<div className='resumen text-light text-center'>
							<h2 className='mb-4'>Resumen</h2>
							<p>
									<span className='font-weight-bold'>El precio de {name} en {monedaCotizada} es de: </span>
									$ {(price).toFixed(2)} .-
							</p>
							<p>
									<span className='font-weight-bold'>Porcentaje ultima hora: </span>
									{percent_change_1h} %
							</p>
							<p>
									<span className='font-weight-bold'>Porcentaje ultimas 24hs: </span>
									{percent_change_24h} %
							</p>
					</div>
			</div>
		)
	}

	render () {
		return (
			<React.Fragment>
					{this.mostrarResultado()}
			</React.Fragment>
		)
	}
}

Resultado.propType = {
	cotizacion: PropTypes.object.isRequired
}

export default Resultado;
