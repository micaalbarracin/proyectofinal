import { useState, useEffect } from "react"
import { getProducts , getProductByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(()=>{

        const asyncFuction= categoryId ? getProductByCategory : getProducts

        asyncFuction(categoryId)
            .then(response => {
                setProducts(response)
            })
    }, [categoryId])
    
    return (
        <div>
            <h1>{!categoryId ? greeting: (greeting + categoryId)}</h1>
            <ItemList products= {products} />
        </div>
    )
}

export default ItemListContainer