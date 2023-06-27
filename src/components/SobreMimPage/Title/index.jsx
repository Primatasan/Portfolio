import './Title.css'
import { PiTagChevronFill } from "react-icons/pi";


export default function Title({ title }){
    return(
        <div className='title_card'>
            <PiTagChevronFill className='icon'/>
            <h2>{title}</h2>
        </div>
    )
}