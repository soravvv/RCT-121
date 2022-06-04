import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const Layout3 = () => {
  return (
    <Box>
      <Grid
        h="600px"
        templateRows={{
          base: "repeat(7, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        templateColumns={{
          base: "repeat(6, 1fr)",
          md: "repeat(6, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={4}
      >
        <GridItem
          rowSpan={{
            base: 1,
            md: 1,
            lg: 1,
          }}
          colSpan={{
            base: 6,
            md: 3,
            lg: 3,
          }}
          bg="yellow"
        ></GridItem>
        <GridItem
          rowSpan={{
            base: 1,
            md: 1,
            lg: 1,
          }}
          colSpan={{
            base: 6,
            md: 3,
            lg: 3,
          }}
          bg="yellow"
        ></GridItem>
        <GridItem
          rowSpan={{
            base: 3,
            md: 2,
            lg: 2,
          }}
          colSpan={{
            base: 6,
            md: 6,
            lg: 6,
          }}
          bg="red"
        ></GridItem>
        <GridItem
          rowSpan={{
            base: 1,
            md: 1,
            lg: 2,
          }}
          colSpan={{
            base: 6,
            md: 6,
            lg: 2,
          }}
          bg="skyblue"
        ></GridItem>
        <GridItem
          rowSpan={{
            base: 2,
            md: 2,
            lg: 2,
          }}
          colSpan={{
            base: 6,
            md: 6,
            lg: 2,
          }}
          bg="skyblue"
        ></GridItem>
        <GridItem
          rowSpan={{
            base: 1,
            md: 0,
            lg: 2,
          }}
          colSpan={{
            base: 0,
            md: 2,
            lg: 2,
          }}
          bg="skyblue"
        ></GridItem>
      </Grid>
    </Box>
  );
};
