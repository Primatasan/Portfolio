import Title from '../Title'
import './Contato.css'
import { FaGithub, FaEnvelope, FaWhatsapp, FaBehance } from "react-icons/fa6";

export default function Contato(){
    return(
        <div className='contact_box'>
            <Title title='Contato'/>
            <div className='contact_wrapper'>
                <a href='mailto:sammartin.dev@gmail.com?subject=Contato | Portfólio | Site' target='_blank' rel="noreferrer">
                    <div className='contact_card'>
                        <FaEnvelope />
                        <p>sammartin.dev@gmail.com</p>
                    </div>
                </a>
                <a href='https://wa.me/5511974856550?text=Ol%C3%A1%2C+Estou+entrando+em+contato+pelo+site+%7C+Portf%C3%B3lio' target='_blank' rel="noreferrer">
                    <div className='contact_card'>
                        <FaWhatsapp />
                        <p>(11) 97485-6550</p>
                    </div>
                </a>
                <a href='https://www.github.com/primatasan' target='_blank' rel="noreferrer">
                    <div className='contact_card'>
                        <FaGithub />
                        <p>github.com/primatasan</p>
                    </div>
                </a>
                <a href='https://www.behance.net/carlosmsdesign' target='_blank' rel="noreferrer">
                    <div className='contact_card'>
                        <FaBehance />
                        <p>behance.net/carlosmsdesign</p>
                    </div>
                </a>
            </div>
        </div>
    )
}