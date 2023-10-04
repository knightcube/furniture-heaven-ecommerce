import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import ProductModel from "../data/models/ProductModel";
import { Link } from "react-router-dom";

const ProductCard: React.FC<{ productItem: ProductModel }> = (props) => {
  const addToCartHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.productItem.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.productItem.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          marginLeft={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={1}
        >
          <Link
            to={{
              pathname: "/details",
              search: `?id=${props.productItem.id.toString()}`,
            }}
          >
            <Button size="medium" variant="contained">
              View Details
            </Button>
          </Link>
          <Button size="small" variant="outlined" onClick={addToCartHandler}>
            Add To Cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
