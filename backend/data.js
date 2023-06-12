import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
                name: 'Heynar',
                email: 'heynar76@hotmail.com',
                password: bcrypt.hashSync('94480750'),
                isAdmin: true,
        },
        {
            name: 'liane',
            email: 'lianesoto2011@gmail.com',
            password: bcrypt.hashSync('12345678'),
            isAdmin: false,
        }
    ],
    products:[
        {
            // _id: '1',
            name: 'Templo  Aries',
            slug: 'templo-aries',
            category: 'zodiaco',
            image: "/image/aries.jpg" ,
            price: 36000,
            countInStock: 10,
            brand: 'PLA',
            rating: 3.5,
            numReviews: 10,
            description: 'Templo del Carnero'
        },
        {
            // _id: '2',
            name: 'Templo de Tauro',
            slug: 'templo-tauro',
            category: 'zodiaco',
            image: "/image/tauro.jpg",
            price: 30000,
            countInStock: 0,
            brand: 'PLA',
            rating: 4,
            numReviews: 10,
            description: 'Templo del toro'
        },
        {
            // _id: '3',
            name: 'Templo de Geminis',
            slug: 'templo-geminis',
            category: 'ropa',
            image: '/image/p1.jpg' ,
            price: 40000,
            countInStock: 10,
            brand: 'PLA',
            rating: 4.5,
            numReviews: 10,
            description: 'Templo de los gemelos'
        },
    ]
}
export default data;