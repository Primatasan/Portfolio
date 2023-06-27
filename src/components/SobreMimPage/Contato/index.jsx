import Title from '../Title'
import './Contato.css'
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

export default function Contato(){
    return(
        <div className='contact_box'>
            <Title title='Contato'/>
            <div className='contact_wrapper'>
                <div className='contact_card'>
                    <FaEnvelope />
                    <p>sammartin.dev@gmail.com</p>
                </div>
                <div className='contact_card'>
                    <FaWhatsapp />
                    <p>(11) 97485-6550</p>
                </div>
                <div className='contact_card'>
                    <FaGithub />
                    <p>github.com/primatasan</p>
                </div>
            </div>
        </div>
    )
}