import { Box, Flex, Image, Link } from "@chakra-ui/react";

import Woofles from "./PortfolioWorks/Woofles";
import PinoyTravels from "./PortfolioWorks/PinoyTravels";
import Spigs from "./PortfolioWorks/Spigs";
import Wireframe from "./PortfolioWorks/Wireframe";

const PortfolioPage = () => {
  return (
    <>
        <Flex w={"100%"} minH={"100%"} flexDirection={"column"}>
          <Flex
            w={"100%"}
            p={3}
            justify={"left"}
            align={"center"}
            backgroundColor={"#FFF"}
          >
            <Box>
              <Link
                href={"/home"}
                cursor={"pointer"}
                _hover={{ textDecoration: "none" }}
              >
                <Image src={"/images/LogoCarl.png"} maxH={"32px"} />
              </Link>
            </Box>
          </Flex>

          <Flex
            flexDirection={"column"}
            justify={"center"}
            align={"center"}
            w={"100%"}
            h={"100%"}
          >
            <Woofles />
            <PinoyTravels />
            <Spigs />
            <Wireframe />
          </Flex>
        </Flex>
    </>
  );
};

export default PortfolioPage;
