import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    
    // Váriaveis
    state = {
        categories: [],
    }

    // método executado no inicio do carregamento.
    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = async () => {
        const response = await api.get('/categories');

        this.setState({ categories: response.data });
    };

    render() {
       return (
        <div className="categories-list">
            {this.state.categories.map(category => (
                <h2 key={category.id}>{category.name}</h2>
            ))}
        </div>
       );
    }
}