import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import { Hero } from "../components";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    //fetech all products when page loads
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>....loading</div>;
  return (
    <Box>
      <Hero />
      <RichText
        heading="The relaxation you've been waiting for."
        text=" Our Bath Bombs guarantee a fun, relaxing, and colorful night"
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                {product.title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText heading="Treat Yourself" />
      <ImageWithText
        text="Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crows nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits"
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758"
        heading="Heading"
      />
      <ImageWithText
        reverse
        text="Jelly-o lollipop tootsie roll bonbon cake tart gingerbread apple pie wafer. Chocolate bar tootsie roll sweet roll candy canes gingerbread dessert jelly-o cupcake pudding. Chocolate cake lollipop chocolate cake powder jelly. Sugar plum donut cotton candy sweet roll. Oat cake tart gingerbread soufflé carrot cake topping danish. Sugar plum icing cupcake chupa chups."
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758"
        heading="Second Heading"
      />
    </Box>
  );
};

export default Home;
