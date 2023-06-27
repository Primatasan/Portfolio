
import './Header.css'
import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa6";
import photo from '/src/assets/foto_carlos_sammartin.png'

export default function Header(){
    return(
        <section className='header_box'>
            <div className='info'>
                <div>
                    <h1>
                        Carlos
                        <br></br>
                        Sammartin
                    </h1>
                    <p>UI designer | Front-end Developer</p>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/carlossanmartindeabreu/' target='_blank' rel='noreferrer'><FaLinkedinIn className='icon'/></a>
                    <a href='https://github.com/Primatasan' target='_blank' rel='noreferrer'><FaGithub className='icon'/></a>
                    <a href='https://www.behance.net/carlosmsdesign' target='_blank' rel='noreferrer'><FaBehance className='icon'/></a>
                </div>
            </div>
            <div>
                <img src={photo} alt='Foto de Carlos Sammartin'/>
            </div>
        </section>
    )
}