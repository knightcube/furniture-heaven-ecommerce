import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import dummyProducts from "../data/DummyData";
import ProductModel from "../data/models/ProductModel";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const productId: string = new URLSearchParams(location.search).get("id")!;
  const [selectedProduct, setSelectedProduct] = React.useState<ProductModel>({
    id: "",
    name: "",
    price: 0,
  });
  useEffect(() => {
    const selectedProducts: ProductModel[] = dummyProducts.filter((item) => {
      return item.id == productId;
    })!;
    setSelectedProduct(selectedProducts[0])
    console.log(selectedProducts[0]);
  }, []);
  return <div>{selectedProduct.name}</div>;
};

export default ProductDetails;
