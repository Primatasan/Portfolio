import { Link } from 'react-router-dom'
import './Menu.css'

 
export default function Menu(){
    return(
        <section className='menu_box'>
            <nav>
                <Link to='/' className='nav_link'>Sobre Mim</Link>
                <Link to='/portfolio' className='nav_link'>Portfólio</Link>
            </nav>
        </section>
    )
}