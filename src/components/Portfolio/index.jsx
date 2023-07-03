import './Portfolio.css'
import PortfolioCard from './PortfolioCard'

import {projetos} from './projetos.json'

export default function Portfolio(){

    return(
        <div className='portfolio_cards_box'>
            <div className='wrapper'>
                {projetos.map((e) => (
                    <PortfolioCard 
                        key={e.id} 
                        image={`src/assets/portfolio/${e.id}/${e.id}.png`} 
                        title={e.titulo} 
                        subtitle={e.subtitulo} 
                    />
                ))}
            </div>
        </div>
    )
}