import Title from '../Title';
import './Experiencia.css'
import {exp} from './experiencia.json'
import { GiPlainCircle } from "react-icons/gi";


export default function Experiencia(){

    return(
        <div className='exp_box'>
            <Title title='Experiencia'/>
            {exp.map((e) => (
                <div key={e.key} className='exp_map'>
                    <div className='data_card'>
                        <div className='data'>
                            <h2>{e.data}</h2>
                        </div>
                        <GiPlainCircle className='icon' />
                    </div>
                    <div className='text_card'>
                        <h2>{e.cargo}</h2>
                        <h3>{e.empresa}</h3>
                        <p>{e.texto}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}