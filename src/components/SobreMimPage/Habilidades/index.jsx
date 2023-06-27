import Title from '../Title'
import Card from './Card'
import {hbld} from "../Habilidades/hbld.json"
import './Habilidades.css'

export default function Habilidades (){

    return(
        <div className='card_box'>
            <Title  title="Habilidades"/>
            <div className='wrapper'>
                {hbld.map((e)=>(
                   <Card key={e.name} name={e.name} img={e.img} /> 
                ))}
            </div>
        </div>
    )
}