import aries from "./image/aries.jpg"
import tauro from "./image/tauro.jpg"
import p1 from './image/p1.jpg'

const data = {

    products:[
        {
            name: 'Templo  Aries',
            slug: 'templo-aries',
            category: 'zodiaco',
            image: aries ,
            price: 36000,
            countInStock: 10,
            brand: 'PLA',
            rating: 4,
            numReviews: 10,
            description: 'Templo del Carnero'
        },
        {
            name: 'Templo de Tauro',
            slug: 'templo-tauro',
            category: 'zodiaco',
            image: tauro ,
            price: 30000,
            countInStock: 10,
            brand: 'PLA',
            rating: 4,
            numReviews: 10,
            description: 'Templo del toro'
        },
        {
            name: 'Templo de Geminis',
            slug: 'templo-geminis',
            category: 'ropa',
            image: p1 ,
            price: 40000,
            countInStock: 10,
            brand: 'PLA',
            rating: 5,
            numReviews: 10,
            description: 'Templo de los gemelos'
        },
    ]
}
export default data;