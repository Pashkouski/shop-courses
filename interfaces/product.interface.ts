export interface Characteristic {
    value: string
    name: string
}

export interface reviewsModel {
    _id: string
    name: string
    title: string
    description: string
    rating: string
    createdAt: Date
}

export interface ProductModel {
    _id: string
    categories: string[]
    tags: string[]
    title: string
    link: string
    price: number
    credit: number
    oldPrice: number
    description: string
    characteristics: Characteristic[]
    createdAt: Date
    updatedAt: Date
    image: string
    initialRating: number
    reviews: reviewsModel[]
    reviewCount: number
    reviewAvg?: number
    advantages: string
}