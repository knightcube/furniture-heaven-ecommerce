class ProductModel{
    id: string
    name:string
    price:number
    category:string

    constructor(name:string,price:number, category:string){
        this.id = new Date().toISOString()
        this.name = name
        this.price = price
        this.category = category
    }
}

export default ProductModel