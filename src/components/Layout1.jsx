import React from "react";
import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";

export const Layout1 = () => {
  return (
    <Box>
      <Grid
        h="300px"
        templateRows={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1} bg="blue">
          <Center h="300px">
            <Heading>NAV</Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={2} bg="green">
          <Center h="300px">
            <Heading>CONTENT</Heading>
          </Center>
        </GridItem>
        <GridItem colSpan={1} bg="red">
          <Center h="300px">
            <Heading>WIDGET</Heading>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};
