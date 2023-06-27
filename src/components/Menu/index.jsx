import { Link, useLocation } from 'react-router-dom'
import './Menu.css'

 
export default function Menu(){

    const location = useLocation();

    return(
        <section className='menu_box'>
            <nav>
                <Link to='/' className={`
                    nav_link
                    ${location.pathname === '/' ? "destaque": ""}
                `}>Sobre Mim</Link>
                <Link to='/portfolio' className={`
                    nav_link
                    ${location.pathname === '/portfolio' ? "destaque": ""}
                `}>Portfólio</Link>
            </nav>
        </section>
    )
}