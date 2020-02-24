import React, { Component } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

import "./style.css";

class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        // desistruturação
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);
        
        // prenche a váriavel product definida no state como o response.data.
        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;
    
        return (
            <div className="product-info">
                <h1>{product.name}</h1>
                <p>{product.description}</p>

                <p>
                    ID CATEGORIA: {product.category_id}
                    {/* URL: <a href={product.url}>{product.url}</a> */}
                </p>

                <Link className="btn-back" to={`/`}>Voltar</Link>
            </div>
        );
    }
}

export default Product;