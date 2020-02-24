import React, { Component } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

import './styles.css';
// import Product from '../../components/Product';

export default class Main extends Component {
    
    // Váriaveis
    state = {
        // categories: [],
        products: [],
        productInfo: {},
        page: 1,
    }

    // método executado no inicio do carregamento.
    componentDidMount() {
        // this.loadCategories();
        this.loadProducts();
    }

    // loadCategories = async () => {
    //     const response = await api.get('/categories');

    //     this.setState({ categories: response.data });
    // };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { data, ...productInfo } = response.data;

        this.setState({ products: data, productInfo, page });
        // this.setState({ products: response.data.data });
        // console.log(response.data.data);
    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        // desistruturação para não ficar digitando todo caminho 'this.state.categories'.
        // const { categories } = this.state;        
        const { products, page, productInfo } = this.state;        

        return (
            <div className="products-list">
                {/* <section>
                {categories.map(category => (
                    <article key={category.id}>
                        <strong>{category.name}</strong>
                        <p>Data de criação {category.created_at}</p>

                        <a href="#">Acessar</a>
                    </article>
                ))}
                </section> */}
                <section>
                    {products.map(product => (
                        <article key={product.id}>
                            <strong>{product.name}</strong>
                            <p>Descrição Produto: {product.description}</p>
                            <p>Data de criação Produto: {product.created_at}</p>

                            <Link to={`/products/${product.id}`}>Acessar</Link>
                        </article>
                    ))}
                    <div className="actions">
                        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                    </div>
                </section>
            </div>
        );
    }
}