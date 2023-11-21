import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import dummyProducts from "../data/DummyData";
import ProductModel from "../data/models/ProductModel";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const productId: string = new URLSearchParams(location.search).get("id")!;
  // const params = useParams()
  const [selectedProduct, setSelectedProduct] = React.useState<ProductModel>({
    id: "",
    name: "",
    price: 0,
    category: "",
    imageURL: "",
  });
  useEffect(() => {
    const selectedProducts: ProductModel[] = dummyProducts.filter((item) => {
      return item.id == productId;
    })!;
    setSelectedProduct(selectedProducts[0]);
    console.log(selectedProducts[0]);
  }, []);
  return (
    <div>
      <h1>{selectedProduct.id}</h1>
      <h2>{selectedProduct.name}</h2>
      <h2>imageUrl = {selectedProduct.imageURL}</h2>
      <h2>category = {selectedProduct.category}</h2>
      <h2>Price = {selectedProduct.price}</h2>
    </div>
  );
};

export default ProductDetails;
