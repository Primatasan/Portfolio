import './Post.css'
import Page404 from '/src/components/Page404';

import { useNavigate, useParams } from "react-router-dom"
import {projetos} from "/src/assets/projetos.json"


export default function Post(){

    const parametro = useParams();

    const back = useNavigate();

    const post = projetos.find((e) => {
        return e.id === Number(parametro.id)
    })

    if(!post){
        return <Page404 />
    }

    return(
     <article className="post_main">
        <div className="post_title">
            <h2>{post.titulo}</h2>
            <h3>{post.subtitulo}</h3> 
            <p className='breadcrumbs botao' onClick={() => back(-1)}>Voltar</p>
        </div>
        <div className="block">
            <h3>{post.bloco.titulo1}</h3>
            <p>{post.bloco.bloco1}</p>
            <img src={post.bloco.imagem1}/>
        </div>
        <div className="block block02">
            <h3>{post.bloco.titulo2}</h3>
            <p>{post.bloco.bloco2}</p>
            <img src={post.bloco.imagem2}/>
        </div>
        <div className="block">
            <h3>{post.bloco.titulo3}</h3>
            <p>{`${post.bloco.bloco3}`}</p>
            <img src={post.bloco.imagem3}/>
        </div>
        <div className='grid'>
            <h3>{post.bloco.titulogrid}</h3>
            <div className='grid_wrapper'>
                <img src={post.bloco.grid1}/>
                <img src={post.bloco.grid2}/>
                <img src={post.bloco.grid3}/>
                <img src={post.bloco.grid4}/>
            </div>
        </div>
     </article>   
    )
}