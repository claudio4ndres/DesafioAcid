import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cards from '../common/Card/Cards';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
             categoriasDisponibles: ['ALBUM','COMMENT','PHOTO','POST','TODO','USER']
        })

        this.siguienteVista = this.siguienteVista.bind(this);
    };

    siguienteVista  = (e) => {
        console.log(e);
    }

    render() {
        const { categoriasDisponibles } = this.state;
        return (
            <section>
                <h1> Selecciona una categoria! </h1>
                <Cards categorias={categoriasDisponibles} queSeleccionamos={this.siguienteVista} />
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        //
    }
}

const mapDispatchToProps = dispatch => {
    return {
         ///
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));