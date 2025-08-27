import { Flex, Box, Spacer, HStack, Link, Button } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex
      as="nav"
      bg="gray.800"
      color="white"
      p={4}
      align="center"
      width={"100vw"}
    >
      {/* Logo/Brand */}
      <Box fontWeight="bold" fontSize="xl" cursor={"pointer"}>
        MyBrand
      </Box>

      <Spacer />

      {/* Links */}
      <HStack gap={10} align="center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Button colorScheme="teal" size="sm">
          Contact
        </Button>
      </HStack>
    </Flex>
  );
}
