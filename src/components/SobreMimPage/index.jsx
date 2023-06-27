import './SobreMimPage.css'
import SobreMim from "./SobreMim";
import Experiencia from './Experiencia';
import Habilidades from './Habilidades';
import Contato from './Contato';

export default function SobreMimPage(){
    return(
        <section className='body_box'>
            <div>
                <SobreMim />
            </div>
            <div>
                <Experiencia />
            </div>
            <div>
                <Habilidades />
            </div>
            <div>
                <Contato />
            </div>
        </section>
    )
}