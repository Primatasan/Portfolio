import './Card.css'

export default function Card({name, img}){
    return(
        <div className='hbld_card'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}