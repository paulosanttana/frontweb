import React from 'react';

import './style.css';

// Abaixo com 'Statles Component' que permite criar component resumido igual abaixo.
const Header = () => (
    <header id="main-header">FrontWeb</header>
);

// ------------------------------------------------------
// Abaixo sem 'Statles Component' que será necessário criar todo component sem abreviação.
// 
// class Header extends Component {
//     render() {
//         return <h1>Hello</h1>
//     }
// }
// ------------------------------------------------------

export default Header;