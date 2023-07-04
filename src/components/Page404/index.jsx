import { useNavigate } from 'react-router-dom'
import './Page404.css'

export default function Page404(){

    const back = useNavigate();

    return (
        <div className='box_404'>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <h3>O URL solicitado não foi encontrado neste servidor</h3>
            <div className='botao' onClick={() => back(-1)}>Voltar</div>
        </div>
    )
}