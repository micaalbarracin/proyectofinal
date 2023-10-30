const products =[
    {
        id:'1',
        name: 'Cartera Nicki',
        price: 5600,
        category: 'Cartera',
        img: '/images/cartera.jpeg',
        description: 'Cartera material eco-cuero negro',
        stock: 20
        
    },
    

    {
        id:'2',
        name: 'Mochila Mika',
        price: 8500,
        category: 'Mochila',
        img:'/images/mochila.jpeg',
        description: 'Mochila material eco-cuero negro',
        stock: 10
        
    }, 

    {
        id:'3',
        name: 'Riñonera Power',
        price: 5000,
        category: 'Riñonera',
        img: '/images/riñonera.jpeg',
        description: 'Riñonera material charol negro',
        stock: 15
        
    }
]

export const getProducts =() =>{
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}


export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))

        }, 500)

    } )
}

export default asyncMock