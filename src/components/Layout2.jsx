import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

export const Layout2 = () => {
  return (
    <Box>
      <Grid
        h="500px"
        templateRows={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        <GridItem
          rowSpan={{
            base: 1,
            md: 2,
          }}
          colSpan={{
            base: 2,
            md: 2,
          }}
          bg="purple"
        ></GridItem>
        <GridItem
          colSpan={{
            base: 2,
            md: 1,
          }}
          rowSpan={{
            base: 1,
            md: 3,
          }}
          bg="tomato"
        ></GridItem>
        <GridItem
          rowSpan={{
            base: 1,
            md: 1,
          }}
          colSpan={2}
          bg="skyblue"
        ></GridItem>
      </Grid>
    </Box>
  );
};
