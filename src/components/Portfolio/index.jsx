import './Portfolio.css'
// import PortfolioCard from './PortfolioCard'
import ReactMarkdown from 'react-markdown'
import { projetos } from './projetos.json'

export default function Portfolio(){

    return(
        <ReactMarkdown>
            {projetos[0].blocoA}
        </ReactMarkdown>
    )
}