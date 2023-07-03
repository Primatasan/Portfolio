import './PortfolioCard.css'
import { Link } from "react-router-dom";

export default function PortfolioCard({image, title, subtitle}){
    return (
        <div className='portfolio_card'>
            <img src={image} alt={title} />
            <div className='portfolio_card_infomation'>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <Link className='botao'>Veja mais</Link>
            </div>
        </div>
    )
}