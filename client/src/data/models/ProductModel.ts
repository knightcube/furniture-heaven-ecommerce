class ProductModel{
    id: string
    name:string
    price:number
    category:string
    imageURL: string

    constructor(name:string, price:number, category:string, imageURL:string){
        this.id = new Date().toISOString()
        this.name = name
        this.price = price
        this.category = category
        this.imageURL = imageURL
    }
}

export default ProductModel