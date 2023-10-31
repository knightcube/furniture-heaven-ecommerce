import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import dummyProducts from "../data/DummyData";
import ProductModel from "../data/models/ProductModel";
import axios from "axios";
import { Box, Typography } from "@mui/material";

const baseURL = "http://localhost:5000";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const productId: string = new URLSearchParams(location.search).get("id")!;
  // const { id: productId } = useParams();

  const [product, setProduct] = useState<ProductModel>({
    id:"",
    name:"",
    price:0,
    category:"",
  });

  useEffect(() => {
    axios.get(`${baseURL}/api/products/${productId}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
    </Box>
  );
};

export default ProductDetails;
