import React from 'react';
import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Landing Page</Link></li>
                <li><Link to="/cores">Cores</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
            </ul>
        </div>
    )
}

export default Menu;