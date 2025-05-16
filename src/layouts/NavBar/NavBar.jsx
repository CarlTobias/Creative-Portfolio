import React from "react";

import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Flex w={"100vw"} h={"100vh"} flexDirection={"column"}>
        <Flex w={"100%"} p={3} justify={"space-between"} align={"center"}>
          <Box>
            <Image src={"/images/LogoCarl.png"} maxH={"32px"} />
          </Box>
          <Flex
            flexDirection={"row"}
            gap={5}
            justify={"center"}
            align={"center"}
          >
            <Box>
              <Link cursor={"pointer"} _hover={{ textDecoration: "none" }}>
                About
              </Link>
            </Box>
            <Box>
              <Link cursor={"pointer"} _hover={{ textDecoration: "none" }}>
                Portfolio
              </Link>
            </Box>
            <Box>
              <Link cursor={"pointer"} _hover={{ textDecoration: "none" }}>
                CV
              </Link>
            </Box>
          </Flex>
        </Flex>

        <Box flex={1}>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
