import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

export function Header() {


    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }, [])


    return (
        <>
            <nav className="nav-wrapper black">
                <div className='container'>
                    <div className='row'>
                        <div>
                            <Link to='/' className="brand-logo">React Movies</Link>
                            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li><a href="#item1">Item 1</a></li>
                <li><a href="#item2">Item 2</a></li>
                <li><a href="#item3">Item 3</a></li>
            </ul>
        </>
    )
}