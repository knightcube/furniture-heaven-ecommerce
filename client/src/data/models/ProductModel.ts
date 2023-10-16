class ProductModel{
    id: string
    name:string
    price:number

    constructor(name:string,price:number){
        this.id = new Date().toISOString()
        this.name = name
        this.price = price
    }
}

export default ProductModel