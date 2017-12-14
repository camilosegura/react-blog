import React from 'react';
import { Link } from 'react-router-dom';

const ControlsBar = () => (
    <ul class="nav">
        <li class="nav-item">
            <Link className="nav-link ion-compose" to="/posts/create" style={{fontSize: '36px'}}></Link>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Order By</a>
            <div className="dropdown-menu">
                <button className="dropdown-item">Voted More</button>
                <a className="dropdown-item" href="#">Voted Less</a>
                <a className="dropdown-item" href="#">Created First</a>
                <a className="dropdown-item" href="#">Created Last</a>
            </div>
        </li>
    </ul>
)

export default ControlsBar;