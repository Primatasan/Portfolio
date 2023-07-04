import './Portfolio.css'
import PortfolioCard from './PortfolioCard'


import {projetos} from '/src/assets/projetos.json'

export default function Portfolio(){

    return(
        <div className='portfolio_cards_box'>
            <div className='wrapper'>
                {projetos.map((e) => (
                    <PortfolioCard
                        key={e.id} 
                        image={`https://carlosmsdesign.com.br/portfolio/img/post/${e.id}/${e.id}.png`} 
                        title={e.titulo} 
                        subtitle={e.subtitulo} 
                        id={e.id}
                    />
                ))}
            </div>
        </div>
    )
}