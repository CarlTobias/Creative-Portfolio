import React from "react";

import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Flex w={"100%"} h={"100vh"} flexDirection={"column"}>
        <Flex
          w={"100%"}
          p={3}
          justify={{base: "center", md: "space-between"}}
          align={"center"}
          // might remove these
          position={"fixed"}
          backgroundColor={"#FFF"}
        >
          <Box>
            <Link
              href={"/home"}
              cursor={"pointer"}
              _hover={{ textDecoration: "none" }}
            >
              <Image src={"/images/LogoCarl.png"} maxH={"32px"} display={{base: "none", md: "block"}} />
            </Link>
          </Box>
          <Flex
            flexDirection={"row"}
            gap={10}
            justify={"center"}
            align={"center"}
            pr={5}
          >
            <Box>
              <Link
                href={"/about"}
                fontSize={20}
                cursor={"pointer"}
                _hover={{ textDecoration: "none" }}
              >
                About
              </Link>
            </Box>
            <Box>
              <Link
                href={"/portfolio"}
                fontSize={20}
                cursor={"pointer"}
                _hover={{ textDecoration: "none" }}
              >
                Portfolio
              </Link>
            </Box>
            <Box>
              <Link
                fontSize={20}
                cursor={"pointer"}
                _hover={{ textDecoration: "none" }}
              >
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
