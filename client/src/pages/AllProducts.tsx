import { Box, Typography } from "@mui/material";
import React from "react";
import dummyProducts from "../data/DummyData";
import ProductCard from "../components/ProductCard";
import HeaderNav from "../components/HeaderNav";

const AllProducts: React.FC = () => {
  return (
    <Box>
      <HeaderNav/>
      <Box marginTop={10} marginBottom={2} textAlign={"center"}>
        <Typography variant="h3">All Products</Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} >
        {dummyProducts.map((item, index) => {
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
