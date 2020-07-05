import React, { Component, Fragment } from "react";


import api from "../../../service/api";
import Search from '../../utils/search/search';
import SectorTable from './sectorTable';

import { Container } from '@material-ui/core';

export default class Sector extends Component {
    state = {
        name: '',
        sectors: [],
        nameBefore: 'initial',
    };
    search = busca => {
        this.setState({ nome: busca })
        console.log(this.state.nameBefore)

    }
    componentDidMount() {
        this.loadSectors(this.state.name);
    }
    componentDidUpdate() {
        this.loadSectors(this.state.name);
    }
    loadSectors = async prevProps => {
        //para evitar que o componentDidUpdate entre em loop.
        //ANALISAR FORMA DE DEIXAR MAIS LIMPO
        if (prevProps !== this.state.nameBefore) {
            const response = await api.get('/sectors/sector_name=' + this.state.name);
            this.setState({ sectors: response.data, nameBefore: this.state.name });
            // this.setState({contacts: response.data});
        }
        // this.setState({contacts:response.data});

    };

    render() {
        const { sectors } = this.state;

        return (
            <Fragment>
                <Search search={this.search} />
                <Container >
                    <SectorTable sectors={sectors} />
                </Container>
            </Fragment>
        );
    }
}
