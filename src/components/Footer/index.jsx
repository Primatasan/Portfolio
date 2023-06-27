import './Footer.css'
import { FaCreativeCommons, FaCreativeCommonsBy, FaCreativeCommonsSa } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className='footer_box'>
            <h3>Carlos Sammartin | 2023 | </h3>
            <div className='cc_box'>
                <FaCreativeCommons className='cc_icon'/>
                <FaCreativeCommonsBy className='cc_icon'/>
                <FaCreativeCommonsSa className='cc_icon'/>
            </div>
        </div>
    )
}