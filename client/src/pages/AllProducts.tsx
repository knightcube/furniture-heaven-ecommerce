import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import HeaderNav from "../components/HeaderNav";
import axios from "axios";

const baseURL = "http://localhost:5000";

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/api/products`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Box>
      <HeaderNav />
      <Box marginTop={10} marginBottom={2} textAlign={"center"}>
        <Typography variant="h3">All Products</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        {products.map((item, index) => {
          return (
            <Box key={index} marginRight={2} textAlign={"center"}>
              <ProductCard productItem={item}></ProductCard>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AllProducts;
