import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, img, price, stock, description}) => {
    return(
        <div>
           <p>{name}</p>
            <img src={img} style= {{width: 100}} />
            <p>${price}</p>
            <p>Descripción: {description}</p>
            <p>Descripción: {descrit}</p>
            <ItemCount stock= {stock}/>

        </div>
    )
}

export default ItemDetail