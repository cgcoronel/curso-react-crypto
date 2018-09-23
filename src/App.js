import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

import axios from 'axios';

class App extends Component {

  state = {
      monedas: [],
      cotizacion: {},
      monedaCotizada: '',
      cargando: false
  }

  async componentDidMount(){
      this.obtenerMonedas();
  }

  obtenerMonedas = async () => {
      const url = `https://api.coinmarketcap.com/v2/ticker/`;

      await axios.get(url)
        .then(res => {
            this.setState( {
              monedas: res.data.data
            } );
        })
        .catch(err =>{
          console.log(err);
        });
  }

  obtenerValoresCrypto = async (monedas) => {
    const { moneda, crypto } = monedas;
    const url = `https://api.coinmarketcap.com/v2/ticker/${crypto}/?convert=${moneda}`;

    await axios.get(url)
      .then(res => {
          this.setState({
            cargando: true
          })
          setTimeout(() => {
            this.setState({
              cotizacion: res.data.data,
              monedaCotizada: moneda,
              cargando: false
            })
          }, 3000)
      })
      .catch(err =>{
        console.log(err);
      });
  }

  render() {

    const cargando = this.state.cargando;

    let resultado;

    if (cargando) {
      resultado = <div classNames="spinner"></div>
    } else {
      resultado = <Resultado
                    cotizacion={this.state.cotizacion}
                    monedaCotizada={this.state.monedaCotizada}
                  />
    }

    return (
      <div className="container">
        <Header
            title ='Cotiza Criptomonedas al instante'
          />

        <div className='row justify-content-center'>
          <div className='col-md-6 bg-light pb-4 contenido-principal'>
            <Formulario
                monedas={this.state.monedas}
                obtenerValoresCrypto={this.obtenerValoresCrypto}
              />
            {resultado}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
