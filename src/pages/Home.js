import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    //fetech all products when page loads
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log(products);

  if (!products) return <div>....loading</div>;
  return (
    <Box>
      {products.map((product) => (
        <Link to={`/products/${product.handle}`}>
          <Image src={product.images[0].src} />
          <Text>{product.title}</Text>
          <Text>${product.variants[0].price}</Text>
        </Link>
      ))}
    </Box>
  );
};

export default Home;
