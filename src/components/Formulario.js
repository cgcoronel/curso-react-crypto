import React from 'react';
import PropTypes from 'prop-types';
import OptionSelect from './OptionSelect';

class Formulario extends React.Component {

	moneda = React.createRef();
	crypto = React.createRef();

	cotizarMonedas = (e) => {
	  e.preventDefault();

		const cotizacion = {
			moneda: this.moneda.current.value,
			crypto: this.crypto.current.value
		}	

		this.props.obtenerValoresCrypto(cotizacion);

	}

	render () {
		return (
			<form onSubmit={this.cotizarMonedas}>
				<div className='form-group'>
					<label>Moneda:</label>
						<select
								ref={this.moneda}
								className='form-control'
							>
								<option value='' disabled defaultValue>Elige tu moneda</option>
								<option value='USD'>Dolar estadounidense</option>
								<option value='MXN'>Peso mexicano</option>
								<option value='GBP'>Libras</option>
								<option value='EUR'>Euros</option>
						</select>
				</div>

				<div className='form-group'>
						<label>Criptomoneda</label>
						<select
							ref={this.crypto}
							className='form-control'>
							{Object.keys(this.props.monedas).map(key => (
									<OptionSelect
											key={key}
											moneda={this.props.monedas[key]}
										/>
							))}
						</select>
				</div>

				<div className='form-group'>
						<input type='submit' className='btn btn-primary' value='Cotizar' />
				</div>
			</form>
		)
	}
}

Formulario.propType = {
	monedas: PropTypes.array.isRequired,
	obtenerValoresCrypto: PropTypes.func.isRequired
}

export default Formulario;
