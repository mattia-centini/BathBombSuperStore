import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
} from "@chakra-ui/react";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(
    ShopContext
  );

  return (
    <>
      <Drawer isOpen={isCartOpen} placement="right" onClose={closeCart}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Shopping Cart</DrawerHeader>

            <DrawerBody>
              {checkout.lineItems &&
                checkout.lineItems.map((item) => (
                  <Grid
                    templateColumns="repeat (4, 1fr)"
                    gap={1}
                    keys={item.id}
                  >
                    <Text>{item.title}</Text>
                  </Grid>
                ))}
            </DrawerBody>

            <DrawerFooter>
              <Button>Checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Cart;
